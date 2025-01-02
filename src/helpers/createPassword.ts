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

  // Ensure inclusion of specified characters
  let password = "";
  if (!customSet) {
    if (hasNumbers)
      password += defaultNumbers.charAt(
        Math.floor(Math.random() * defaultNumbers.length)
      );
    if (hasSymbols)
      password += defaultSymbols.charAt(
        Math.floor(Math.random() * defaultSymbols.length)
      );
  }

  // Generate remaining password
  for (let i = password.length; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Shuffle password to avoid predictable patterns
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export default createPassword;
