import fs from "fs";
import os from "os";
import path from "path";
import chalk from "chalk";

// Save generated password in generatedPasswords.txt file
const savePassword = (password: string): void => {
  const filePath = path.join(__dirname, "..", "generatedPasswords.txt");

  console.log(`Saving password to: ${filePath}`);

  fs.appendFile(filePath, password + os.EOL, { mode: 0o666 }, (err) => {
    if (err) {
      console.error(chalk.red("Error saving password:", err.message));
    } else {
      console.log(
        chalk.greenBright("Password saved to generatedPasswords.txt")
      );
    }
  });
};

export default savePassword;
