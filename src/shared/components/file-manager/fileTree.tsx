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
                {file.isFolder ? (
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
                ) : (
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                  >
                    <g data-name="22. File Approved" id="_22._File_Approved">
                      <path
                        className="cls-1"
                        d="M22,32H6a3,3,0,0,1-3-3V7A3,3,0,0,1,6,4H8A1,1,0,0,1,8,6H6A1,1,0,0,0,5,7V29a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V11.829a1,1,0,0,0-.293-.708L17.879,6.293A1,1,0,0,0,17.171,6H12a1,1,0,0,1,0-2h5.171a2.978,2.978,0,0,1,2.122.879l4.828,4.828A2.978,2.978,0,0,1,25,11.829V29A3,3,0,0,1,22,32Z"
                      />
                      <path
                        className="cls-1"
                        d="M28,19a1,1,0,0,1-1-1V7.829a1,1,0,0,0-.293-.708L21.879,2.293A1,1,0,0,0,21.171,2H10A1,1,0,0,0,9,3V5A1,1,0,0,1,7,5V3a3,3,0,0,1,3-3H21.171a2.978,2.978,0,0,1,2.122.879l4.828,4.828A2.978,2.978,0,0,1,29,7.829V18A1,1,0,0,1,28,19Z"
                      />
                      <path
                        className="cls-1"
                        d="M26,28H24a1,1,0,0,1,0-2h2a1,1,0,0,0,1-1V22a1,1,0,0,1,2,0v3A3,3,0,0,1,26,28Z"
                      />
                      <path
                        className="cls-1"
                        d="M23,12H18a1,1,0,0,1-1-1V6a1,1,0,0,1,2,0v4h4a1,1,0,0,1,0,2Z"
                      />
                      <path
                        className="cls-2"
                        d="M13,23a1,1,0,0,1-.707-.293l-3-3a1,1,0,0,1,1.414-1.414L13,20.586l4.293-4.293a1,1,0,0,1,1.414,1.414l-5,5A1,1,0,0,1,13,23Z"
                      />
                    </g>
                  </svg>
                )}

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
