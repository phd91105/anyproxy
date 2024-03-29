import { RequestDetail, ResponseDetail } from "anyproxy";
import fs from "fs";
import path from "path";
import { Module } from "../types";
import { bufferToObject, objectToBuffer } from "../utils";
import _ from "lodash";

const files = fs.readdirSync(__dirname);
const modules: Module[] = [];

/**
 * Load Module from directory
 * @date 2023-02-13
 * @param {string} file
 * @returns {Promise<void>}
 */
const loadModule = async (file: string): Promise<void> => {
  const moduleName = path.parse(file).name;
  if (moduleName === "index") {
    return;
  }
  const module: { [key: string]: Module } = await import(`./${moduleName}`);
  modules.push(...Object.values(module));
  console.log("\x1b[32m%s\x1b[0m", `[Module loaded]: ${moduleName}`);
};

// load all modules from this folder
_.forEach(files, loadModule);

/**
 * Process response body
 * @date 2023-02-12
 * @param {RequestDetail} requestDetail
 * @param {ResponseDetail} responseDetail
 * @returns
 */
export const beforeSendResponse = async (
  requestDetail: RequestDetail,
  responseDetail: ResponseDetail
): Promise<ResponseDetail> => {
  try {
    const matchedModule = _.find(modules, (module: Module) =>
      module.pattern.test(requestDetail.url)
    );

    if (matchedModule) {
      responseDetail.response.body = objectToBuffer(
        matchedModule.rewrite(
          bufferToObject(responseDetail.response.body),
          requestDetail
        )
      );
    }
  } catch {
    // do nothing
  }

  return responseDetail;
};
