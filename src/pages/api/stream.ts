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
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const outputFolder: string = __dirname + "./../../../public/videos/output";

  const { query } = req,
    inputFilePath = (query.filePath as string).replace('.m3u8', '.mp4'),
    outputFilePath = path.join(
      outputFolder,
      file.getFilenameWithoutExtension(inputFilePath)
    ),
    segmentDuration = 20;

  const videoOutputFolder = `./public/videos/output/${file.getFilenameWithoutExtension(
    inputFilePath
  )}/v0`;

  if (!fsSync.existsSync(videoOutputFolder)) {
    await fs.mkdir(videoOutputFolder, { recursive: true });
  }

  let files = await fs.readdir(videoOutputFolder);

  if (!files.length) {
    const result = await videoSplitter(
      inputFilePath,
      outputFilePath,
      segmentDuration,
      file.getFilenameWithoutExtension(inputFilePath)
    );

    files = await fs.readdir(videoOutputFolder);
  }

  console.log(files, videoOutputFolder);

  const m3u8Content =
    `#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:${segmentDuration}\n#EXT-X-MEDIA-SEQUENCE:0\n` +
    files
      .map((file, index) => `#EXTINF:${segmentDuration},\n${videoOutputFolder.replace('./public', 'http://localhost:3000')}/${file}`)
      .join("\n") +
    `\n#EXT-X-ENDLIST`;

  res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
  res.send(m3u8Content);
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
