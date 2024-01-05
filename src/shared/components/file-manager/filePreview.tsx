"use client";

import { useEffect, useState } from "react";

export default function FileTree(props: any) {
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    setFile(props.file);
  }, [props.file]);

  return <div className="flex flex-row">{file ? file.fileName : null}</div>;
}
