// styledOutput.js
const chalk = require('chalk');

// Welcome message in green
console.log(chalk.green("Welcome to the Node Assessment App!"));

// Error message in red
console.log(chalk.red("Error: Something went wrong!"));

// Warning message in yellow
console.log(chalk.yellow("Warning: Please check your configuration."));

// Info message in blue
console.log(chalk.blue("Info: The application is running smoothly."));

// Function to display a colorful menu
function displayMenu() {
  console.log(chalk.cyan("\n=== Main Menu ==="));
  console.log(chalk.green("1. Start Application"));
  console.log(chalk.yellow("2. Settings"));
  console.log(chalk.blue("3. About"));
  console.log(chalk.red("4. Exit"));
}

// Demonstrate the menu
displayMenu();
