const fm = require("./FileManager");

fm.createLogFile();
fm.appendLog("First log entry");
fm.appendLog("Second log entry");
fm.readLogs();
fm.createDirectory();
fm.listFiles();

