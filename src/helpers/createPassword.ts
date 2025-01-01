const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const defaultSymbols = "!@#$%^&*()_+=";
const defaultNumbers = "0123456789";

// Create Password
const createPassword = (
  length: number,
  hasSymbols: boolean,
  hasNumbers: boolean,
  customSet?: string
): string => {
  let characters = customSet || alphabets;

  if (hasSymbols && !customSet) characters += defaultSymbols;
  if (hasNumbers && !customSet) characters += defaultNumbers;

  if (customSet) {
    if (hasSymbols)
      characters += customSet.match(/[^A-Za-z0-9]/g)?.join("") || "";
    if (hasNumbers) characters += customSet.match(/[0-9]/g)?.join("") || "";
  }

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
