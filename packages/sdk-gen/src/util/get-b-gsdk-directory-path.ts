import fs from "fs";
import path from "path";

export const getBGsdkDirectoryPath = (cwd: string, customDir?: string) => {
  const schemaPath = path.join(cwd, customDir || "b-gsdk");
  if (fs.existsSync(schemaPath)) {
    return schemaPath;
  }

  return null;
};
