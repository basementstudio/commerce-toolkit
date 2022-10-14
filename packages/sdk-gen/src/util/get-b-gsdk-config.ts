import fs from "fs";
import path from "path";
import { z } from "zod";

const configSchema = z.object({
  endpoint: z.string(),
  headers: z.record(z.string()).optional(),
});

export type BGsdkConfig = z.infer<typeof configSchema>;

export const getBGsdkConfig = (directoryPath: string) => {
  const bgsdkConfigJsonPath = path.join(directoryPath, "config.json");
  const bgsdkConfigJSPath = path.join(directoryPath, "config.js");

  let rawConfig = {};
  if (fs.existsSync(bgsdkConfigJsonPath)) {
    rawConfig = JSON.parse(fs.readFileSync(bgsdkConfigJsonPath, "utf8"));
  } else if (fs.existsSync(bgsdkConfigJSPath)) {
    rawConfig = require(bgsdkConfigJSPath);
  } else {
    throw new Error(`Could not find config.{json,js} in ${directoryPath}`);
  }
  const parsedConfig = configSchema.parse(rawConfig);
  return parsedConfig;
};
