import { useState } from "react";
import file from "./../shared/utils/file";
import FileTree from "@/shared/components/file-manager/fileTree";

export default function Home() {
  const getFolderTree = () => {
    const currentDir = __dirname + "/../../../../../../hub/";

    return file.getFolderContainsRecursive(currentDir);
  };

  const files: any = getFolderTree();

  return (
    <section>
      {/* component */}
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block">
                  <p className="inline">
                    <svg
                      className="w-3.5 h-3.5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </p>
                  <p className="inline text-xs font-medium">New</p>
                </div>
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  Write anything. Be creative.
                </a>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <p className="text-sm font-medium inline">author:</p>
                  <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                    Jack Sparrow
                  </a>
                  <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                    · 23rd, April 2021 ·
                  </p>
                  <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="block">
                <img
                  src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
                Entertainment
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Improving your day to the MAX
              </a>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  Jack Sparrow
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · 23rd, March 2021 ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                  1hr 20min. read
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
                Entertainment
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Improving your day to the MAX
              </a>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  Jack Sparrow
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · 23rd, March 2021 ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                  1hr 20min. read
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
                Entertainment
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Improving your day to the MAX
              </a>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  Jack Sparrow
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · 23rd, March 2021 ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                  1hr 20min. read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File Manager Overlay */}
      <div className="fixed top-0 left-0 z-[999999] bg-gray-900/30 w-full h-full backdrop-blur-sm">
        {/* File Manager Container */}
        <div className="flex flex-col rounded-lg border border-gray-200 shadow-md m-20 bg-white">
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
