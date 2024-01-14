import { useState } from "react";
import file from "./../shared/utils/file";
import FileTree from "@/shared/components/file-manager/fileTree";
import * as path from "path";

export default function Home() {
  const getFolderTree = () => {
    const currentDir = __dirname + "/../../../../../../hub/";

    console.log(__dirname, path.resolve(__dirname, "../../../../../../hub/"));

    return file.getFolderContainsRecursive(currentDir);
  };

  const files: any = getFolderTree();

  return (
    <section>
      {/* File Manager Overlay */}
      <div className="fixed top-0 left-0 z-[999999] bg-gray-900/30 w-full h-full backdrop-blur-sm">
        {/* File Manager Container */}
        <div className="flex flex-col rounded-lg border border-gray-200 shadow-md bg-white">
          {/* File Manager Header */}
          <div className="flex flex-row justify-between p-5 border-b border-gray-300">
            {/* Nav Menus */}
            <div className="flex flex-row gap-x-6 justify-center items-center">
              {/* Arrows */}
              <div className="flex flex-row gap-x-5">
                {/* Previous Folder */}
                <button className="bg-transparent border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-gray-600"
                  >
                    <title>arrow-left</title>
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                  </svg>
                </button>

                {/* Next Folder */}
                <button className="bg-transparent border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-gray-600"
                  >
                    <title>arrow-right</title>
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                  </svg>
                </button>
              </div>

              {/* Folder Breadcrumbs */}
              <div className="flex flex-row text-lg gap-x-3">
                <p className="text-gray-400 cursor-pointer hover:underline hover:text-blue-500 transition-all ease-in-out duration-300">
                  Home
                </p>
                <p className="text-gray-400 cursor-pointer hover:underline hover:text-blue-500 transition-all ease-in-out duration-300">
                  /
                </p>
                <p className="text-gray-400 cursor-pointer hover:underline hover:text-blue-500 transition-all ease-in-out duration-300">
                  Documents
                </p>
                <p className="text-gray-400 cursor-pointer hover:underline hover:text-blue-500 transition-all ease-in-out duration-300">
                  /
                </p>
                <p className="text-gray-400 cursor-pointer hover:underline hover:text-blue-500 transition-all ease-in-out duration-300 font-bold">
                  Projects
                </p>
              </div>
            </div>

            {/* Window Action Menu */}
            <div className="flex flex-row gap-x-3">
              {/* Close */}
              <button className="bg-rose-500 hover:bg-rose-600 border-none rounded-full w-7 transition-all ease-in-out duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-white mx-auto"
                >
                  <title>window-close</title>
                  <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* File Manager Body */}
          <FileTree files={files} />
        </div>
      </div>
    </section>
  );
}
