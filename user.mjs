export class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Default export: factory function
export default function createUser(name, email, age) {
return new User(name, email, age);
}
