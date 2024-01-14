"use client";

// import { useEffect, useState } from "react";
// import { VideoPlayer } from "@videojs-player/react";
// import "video.js/dist/video-js.css";

// export default function FileTree(props: any) {
//   const [file, setFile] = useState<any>(null);

//   useEffect(() => {
//     setFile(props.file);
//   }, [props.file]);

//   return (
//     <div className="flex flex-row">
//       {file ? <VideoPlayer src={`/api/stream?filePath=${file.path.replace('.mp4', '.m3u8')}`} /> : null}
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default function FileTree(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !props.file) return;

    video.controls = true;
    const defaultOptions = {};
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // This will run in safari, where HLS is supported natively
      video.src = `/api/stream?filePath=${props.file.path.replace(
        ".mp4",
        ".m3u8"
      )}`;
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers

      const hls = new Hls();
      hls.loadSource(
        `/api/stream?filePath=${props.file.path.replace(".mp4", ".m3u8")}`
      );
      const player = new Plyr(video, defaultOptions);
      hls.attachMedia(video);
    } else {
      console.error(
        "This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"
      );
    }
  }, [props.file]);

  return (
    <>
      <video data-displaymaxtap ref={videoRef} />
      <style jsx>{`
        video {
          max-width: 100%;
        }
      `}</style>
    </>
  );
}
