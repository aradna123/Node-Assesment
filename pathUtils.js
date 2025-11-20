// pathUtils.js
// Demonstrates Node.js path module utilities

const path = require("path");

/**
 * Get the file extension of any given file path
 * @param {string} filePath
 * @returns {string} extension
 */
function getFileExtension(filePath) {
  return path.extname(filePath);
}

/**
 * Join multiple path segments into one normalized path
 * @param  {...string} segments
 * @returns {string} joined path
 */
function joinPaths(...segments) {
  return path.join(...segments);
}

/**
 * Get the absolute path of a file
 * @param {string} filePath
 * @returns {string} absolute path
 */
function getAbsolutePath(filePath) {
  return path.resolve(filePath);
}

/**
 * Parse a file path and return an object with directory, filename, and extension
 * @param {string} filePath
 * @returns {{directory: string, filename: string, extension: string}}
 */
function parseFilePath(filePath) {
  const parsed = path.parse(filePath);
  return {
    directory: parsed.dir,
    filename: parsed.name,
    extension: parsed.ext
  };
}

// Export functions for use in other modules
module.exports = {
  getFileExtension,
  joinPaths,
  getAbsolutePath,
  parseFilePath
};
