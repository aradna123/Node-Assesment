// asyncFileHandler.js
const fs = require('fs');
const fsPromises = require('fs').promises;

// --------------------
// Using Callbacks
// --------------------
function processFileCallback(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) return callback(err);
const processedContent = data.toUpperCase();
    const newFilename = filename.replace('.txt', '-processed.txt');

    fs.writeFile(newFilename, processedContent, (err) => {
      if (err) return callback(err);
      callback(null, `File processed successfully (Callback): ${newFilename}`);
    });
  });
}

// --------------------
// Using Promises
// --------------------
function processFilePromise(filename) {
  const newFilename = filename.replace('.txt', '-processed.txt');
  return fsPromises.readFile(filename, 'utf8')
    .then(data => {
      const processedContent = data.toUpperCase();
      return fsPromises.writeFile(newFilename, processedContent);
    })
    .then(() => `File processed successfully (Promise): ${newFilename}`);
}
// Using Async/Await
// --------------------
async function processFileAsync(filename) {
  try {
    const data = await fsPromises.readFile(filename, 'utf8');
    const processedContent = data.toUpperCase();
    const newFilename = filename.replace('.txt', '-processed.txt');
    await fsPromises.writeFile(newFilename, processedContent);
    return `File processed successfully (Async/Await): ${newFilename}`;
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

// --------------------
// Demonstration
// --------------------
const testFile = 'input.txt';

// Callback demo
processFileCallback(testFile, (err, message) => {
  if (err) console.error("Callback Error:", err.message);
  else console.log(message);
});
// Promise demo
processFilePromise(testFile)
  .then(message => console.log(message))
  .catch(err => console.error("Promise Error:", err.message));

// Async/Await demo
(async () => {
  const message = await processFileAsync(testFile);
  console.log(message);
})();
