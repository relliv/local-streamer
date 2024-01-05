import * as fs from "fs";

export default class File {
  public static getExtension(filename: string): string {
    return filename.split(".").pop() || "";
  }

  public static getName(filename: string): string {
    return filename.split(".").shift() || "";
  }

  public static getFilename(filename: string): string {
    return filename.split("/").pop() || "";
  }

  public static getDirectory(filename: string): string {
    return filename.split("/").slice(0, -1).join("/");
  }

  public static getFilenameWithoutExtension(filename: string): string {
    return File.getName(File.getFilename(filename));
  }

  public static getFolderContainsRecursive(targetDir: string): any[] {
    const folders: any[] = [];

    const files = fs.readdirSync(targetDir);

    files.forEach((file) => {
      const path = `${targetDir}/${file}`;
      const isDirectory = fs.lstatSync(path).isDirectory();

      if (isDirectory) {
        const nestedFolders: any[] = File.getFolderContainsRecursive(path);
        folders.push({
          fileName: file,
          path: path,
          isFolder: isDirectory,
          children: nestedFolders,
        });
      } else {
        folders.push({
          fileName: file,
          path: path,
          isFolder: isDirectory,
          children: [],
        });
      }
    });

    return folders;
  }
}
