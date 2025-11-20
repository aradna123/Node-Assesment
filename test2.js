// index.js
const utils = require("./pathUtils");

console.log("Extension:", utils.getFileExtension("report.pdf"));
console.log("Joined Path:", utils.joinPaths("folder", "subfolder", "file.txt"));
console.log("Absolute Path:", utils.getAbsolutePath("report.pdf"));
console.log("Parsed Path:", utils.parseFilePath("C:/Users/HP/Desktop/report.pdf"));
