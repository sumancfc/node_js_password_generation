const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+=";
const numbers = "0123456789";

// Create Password
const createPassword = (
  length: number,
  hasSymbols: boolean,
  hasNumbers: boolean
): string => {
  let characters = alphabets;

  if (hasSymbols) characters += symbols;
  if (hasNumbers) characters += numbers;

  return generatePassword(length, characters);
};

// Generate Password
const generatePassword = (length: number, characters: string): string => {
  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
};

export default createPassword;
