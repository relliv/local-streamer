"use client";

import { useEffect, useState } from "react";
import { VideoPlayer } from "@videojs-player/react";
import "video.js/dist/video-js.css";

export default function FileTree(props: any) {
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    setFile(props.file);
  }, [props.file]);

  return (
    <div className="flex flex-row">
      {file ? <VideoPlayer src={`/api/stream?filePath=${file.path}`} /> : null}
    </div>
  );
}
