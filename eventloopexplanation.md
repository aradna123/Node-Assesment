**Event Loop Theory** (Simple Form)

JavaScript runs on a single thread, meaning it can only do one thing at a time. To handle tasks efficiently, it uses the event loop. The event loop decides the order in which code runs:

- Synchronous code (Call Stack)
- Runs immediately, line by line.
- Example: console.log("Hello").
- Microtasks (Promise callbacks)
