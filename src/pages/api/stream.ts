import { NextApiRequest, NextApiResponse } from "next";
import fsSync, { promises as fs } from "fs";
import path from "path";
import url from "url";
import file from "./../../shared/utils/file";

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

export const config = {
  api: {
    responseLimit: false,
    // responseLimit: '8mb',
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const outputFolder: string = __dirname + "./../../../public/videos/output";

  // if (!fsSync.existsSync(outputFolder)) {
  //   fsSync.mkdirSync(outputFolder);
  // }

  const { query } = req,
    inputFilePath = query.filePath as string,
    outputFilePath = path.join(
      outputFolder,
      file.getFilenameWithoutExtension(inputFilePath)
    );

  const result = await videoSplitter(
    query.filePath as string,
    outputFilePath,
    20,
    file.getFilenameWithoutExtension(inputFilePath)
  );
}

function videoSplitter(
  inputFilePath: string,
  outputDirPath: string,
  segmentDuration: number,
  fileName: string
) {
  return new Promise((resolve, reject) => {
    const outputPathTemplate = path.join(outputDirPath, "output_%03d.ts");

    ffmpeg(inputFilePath)
      .videoCodec("copy")
      .audioCodec("copy")
      .outputOptions([
        "-map 0:v",
        "-map 0:v",
        "-map 0:a",
        "-map 0:a",
        // "-s:v:0 426x240",
        // "-c:v:0 libx264",
        // "-b:v:0 400k",
        // "-c:a:0 aac",
        // "-b:a:0 64k",
        // "-s:v:1 640x360",
        // "-c:v:1 libx264",
        // "-b:v:1 700k",
        // "-c:a:1 aac",
        // "-b:a:1 96k",
        //'-var_stream_map', '"v:0,a:0 v:1,a:1"',
        "-master_pl_name playlist.m3u8",
        "-f hls",
        "-max_muxing_queue_size 1024",
        `-hls_time ${segmentDuration}`,
        "-hls_playlist_type vod",
        "-hls_list_size 0",
        `-hls_segment_filename ./public/videos/output/${fileName}/v%v/output_%03d.ts`,
      ])
      .output(outputPathTemplate)
      .on("end", () => {
        console.log("Video başarıyla HLS formatında bölündü");
        resolve(true);
      })
      .on("error", (err: any) => {
        console.error(`Video Splitter Error: ${err.message}`);

        reject(err);
      })
      .run();
  });
}
