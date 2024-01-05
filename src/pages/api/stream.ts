import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type ResponseData = {
  isFileExists: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const isFileExists = fs.existsSync(req.query.filePath as string);

  res.status(200).json({ isFileExists: isFileExists });
}
