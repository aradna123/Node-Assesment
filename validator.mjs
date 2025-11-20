// validator.mjs

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validateAge(age) {
  return age >= 0 && age <= 120;
}

export function validateName(name) {
  return typeof name === "string" && name.trim().length > 0;
}

