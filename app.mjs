import createUser, { User } from "./user.mjs";
import { validateEmail, validateAge, validateName } from "./validator.mjs";

// Create users
const user1 = createUser("Aradna Nankani", "aradna@example.com", 22);
const user2 = new User("Simran Vaswani", "simran@gmail.com", 150);

const users = [user1, user2];

// Validate each user
users.forEach(user => {
  console.log("\nValidating:", user.getDetails());
  console.log("Name valid:", validateName(user.name));
  console.log("Email valid:", validateEmail(user.email));
  console.log("Age valid:", validateAge(user.age));
  console.log("Is Adult:", user.isAdult());
});
