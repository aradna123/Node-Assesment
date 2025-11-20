
📘 README.md
# Node Assessment Project

This project demonstrates key Node.js concepts including environment variables, using npm packages, event loop behavior, and asynchronous file handling with callbacks, promises, and async/await.

---

## 🚀 Setup and Run

1. **Clone or download** the project to your local machine.
2. Open the project folder in your terminal.
3. Initialize dependencies:
   ```bash
   npm install


(Make sure chalk and dotenv are installed.) 4. Run each file with Node:
node config.js
node styledOutput.js
node eventLoopDemo.js
node asyncFileHandler.js



📂 Files and Purpose
- .env → Stores actual environment variables (app name, port, DB config, API key).
- .env.example → Template showing required environment variables without values.
- .gitignore → Ensures .env and node_modules are not committed to Git.
- config.js → Loads environment variables using dotenv, provides defaults, exports config object.
- styledOutput.js → Demonstrates colorful console output using chalk (welcome, error, warning, info, menu).
- eventLoopDemo.js → Shows execution order of synchronous code, promises, and timeouts; includes explanation.
- EVENT_LOOP_EXPLANATION.md → Technical but simple explanation of why the event loop produces that order.
- asyncFileHandler.js → Demonstrates file processing three ways: callbacks, promises, async/await.
- input.txt → Sample file used for async file processing demo.

📌 Assumptions
- Node.js (v14+) is installed and available in your environment.
- Files like input.txt exist in the project root for testing async file handling.
- Only basic dependencies (chalk, dotenv) are required; no external frameworks.

⚡ Challenges Faced
- Understanding the event loop order between synchronous code, microtasks (promises), and macrotasks (timeouts).
- Handling errors gracefully in all three async approaches (callbacks, promises, async/await).
- Managing environment variables securely by excluding .env from Git.
- Ensuring chalk works correctly with CommonJS (require) by using a compatible version (chalk@4.1.2).






