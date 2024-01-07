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
      {/* {file ? <VideoPlayer src={`/api/stream?filePath=${file.path}`} /> : null} */}
      {file ? (
        <VideoPlayer src="http://localhost:3000/api/stream?filePath=[project]/src/app/page.tsx%20[app-rsc]%20(ecmascript)/../../../../../../hub//!bbs/Kylle_2050/Kylle_2050-1.mp4" />
      ) : null}
    </div>
  );
}
