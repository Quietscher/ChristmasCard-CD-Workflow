/* global process*/
//Von index.js aus eine einzelne Datei erzeugen über import anweisungen
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/js/index.js",
  output: {
    path: path.join(__dirname, process.env.TARGET, "resources/"),
    filename: "bundle.js",
  },
};