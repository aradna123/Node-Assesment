// fileManager.js
// Demonstrates synchronous + asynchronous FS operations with error handling

const fs = require("fs");
const path = require("path");

// Utility: Get current timestamp
const getTimestamp = () => new Date().toISOString();

/**
 * Synchronous: Creates a file named activity.log and writes the start message
 */
function createLogFile() {
  try {
    const logMessage = `Assessment started at ${getTimestamp()}\n`;
    fs.writeFileSync("activity.log", logMessage, { flag: "w" });
    console.log("✅ activity.log created with start message");
  } catch (err) {
    console.error("❌ Error creating log file:", err.message);
  }
}

/**
 * Asynchronous: Appends a new log entry with timestamp to activity.log
 */
function appendLog(message) {
  const logMessage = `[${getTimestamp()}] ${message}\n`;
  fs.appendFile("activity.log", logMessage, (err) => {
    if (err) {
      console.error("❌ Error appending log:", err.message);
    } else {
      console.log("✅ Log appended");
    }
  });
}

/**
 * Synchronous: Reads and displays all logs from activity.log
 */
function readLogs() {
  try {
    if (!fs.existsSync("activity.log")) {
      console.log("⚠️ No activity.log file found.");
      return;
    }
    const logs = fs.readFileSync("activity.log", "utf8");
    console.log("📜 Logs:\n", logs);
  } catch (err) {
    console.error("❌ Error reading logs:", err.message);
  }
}

/**
 * Asynchronous: Creates a directory named data if it doesn't exist
 */
function createDirectory() {
  const dir = path.join(__dirname, "data"); 
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      console.error("❌ Error creating directory:", err.message);
    } else {
      console.log("✅ 'data' directory created or already exists");
    }
  });
}

/**
 * Synchronous: Lists all files in the current directory
 */
function listFiles() {
  try {
    const files = fs.readdirSync(__dirname);
    console.log("📂 Files in current directory:");
    files.forEach(file => console.log(" -", file));
  } catch (err) {
    console.error("❌ Error listing files:", err.message);
  }
}

// Demonstration: Call all functions in sequence
function demo() {
  createLogFile();                // sync
  appendLog("First log entry");   // async
  appendLog("Second log entry");  // async

  // Delay reading logs to ensure async writes complete
  setTimeout(() => {
    readLogs();                   // sync
    createDirectory();            // async
    listFiles();                  // async
  }, 500);
}

// Run demo when file is executed directly
if (require.main === module) {
  demo();
}

// Export functions for reuse
module.exports = {
  createLogFile,
  appendLog,
  readLogs,
  createDirectory,
  listFiles
};

