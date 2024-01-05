"use client";

import { useEffect, useState } from "react";

export default function FileTree(props: any) {
  const [files, setFiles] = useState<any>(null);
  const [filterFiles, setFilterFiles] = useState<any>(null);
  const [moveHistory, setMoveHistory] = useState<any>(null);

  useEffect(() => {
    setFiles(props.files);
    setFilterFiles(props.files);
  }, [props.files]);

  const moveTo = (file: any) => {
    setMoveHistory(file);
    setFilterFiles(file.children);
  };

  return (
    <div className="flex flex-row flex-wrap p-5 gap-6 justify-center items-center py-5 h-[700px] overflow-y-auto">
      {filterFiles
        ? filterFiles.map((file: any, index: number) => {
            return (
              <button
                key={index}
                className="bg-white rounded-md border border-white hover:border-gray-200 hover:bg-gray-100 transition-all ease-in-out duration-300 px-2 pt-1 pb-2 group"
                onClick={() => moveTo(file)}
              >
                <svg
                  width="90px"
                  height="90px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                    fill="#FFA000"
                  />
                  <path
                    d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                    fill="#FFCA28"
                  />
                </svg>

                <span className="text-base group-hover:underline text-blue-400 group-hover:text-blue-600 transition-all ease-in-out duration-300">
                  {file.fileName}
                </span>
              </button>
            );
          })
        : null}
    </div>
  );
}
