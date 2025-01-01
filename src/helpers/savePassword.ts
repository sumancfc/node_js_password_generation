import fs from "fs";
import os from "os";
import path from "path";
import chalk from "chalk";

const savePassword = (password: string): void => {
  const filePath = path.join(__dirname, "..", "generatedPasswords.txt");

  // console.log(`Attempting to save password to: ${filePath}`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "", { mode: 0o666 });
    console.log(chalk.greenBright("Created new generatedPasswords.txt file."));
  }

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
