/* global process */
//Build-Automatisierung
import "dotenv/config";
import fs from "fs-extra";
import path from "path";

//Rename TARGET folder
if (fs.pathExistsSync(process.env.TARGET)) {
  fs.removeSync(process.env.TARGET, { recursive: true });
}

//Create TARGET folders
fs.mkdirSync(process.env.TARGET);
fs.mkdirSync(path.join(process.env.TARGET, "vendors"), { recursive: true });
fs.mkdirSync(path.join(process.env.TARGET, "resources"), { recursive: true });

//Copy dependencies
fs.copySync(process.env.LIB_FONTELLO, path.join(process.env.TARGET,
  "vendors/fontello"));
fs.copySync(process.env.LIB_GIFJS, path.join(process.env.TARGET,
  "vendors/gif.js")); //

//Copy HTML & CSS
fs.copySync(process.env.HTML, path.join(process.env.TARGET, "/index.html"));
fs.copySync(process.env.CSS, path.join(process.env.TARGET,
  "resources/style.css"));