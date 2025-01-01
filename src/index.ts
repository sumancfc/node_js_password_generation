import { Command } from "commander";
import chalk from "chalk";
import clipboardy from "clipboardy";
import createPassword from "./helpers/createPassword";
import savePassword from "./helpers/savePassword";
import calculateStrength from "./helpers/calculateStrength";
import "./server";

const program = new Command();

program
  .version("1.0.0")
  .description("Generate password using Node.js")
  .option("-l, --length <number>", "Length of password", "12")
  .option("-s, --save", "Save the password")
  .option("--no-symbols", "Remove symbols from password")
  .option("--no-numbers", "Remove numbers from password")
  .option("-c, --custom <string>", "Custom character set")
  .parse(process.argv);

const options = program.opts();

const passwordLength = parseInt(options.length as string, 12);
const includeSymbols = options.symbols !== false;
const includeNumbers = options.numbers !== false;
const customSet = options.custom;

const passwordGenerated = createPassword(
  passwordLength,
  includeSymbols,
  includeNumbers,
  customSet
);

// Check password strength
const passwordStrength = calculateStrength(passwordGenerated);

if (options.save) {
  savePassword(passwordGenerated);
}

clipboardy.writeSync(passwordGenerated);

console.log(
  chalk.blueBright("Your Password is: ") + chalk.green(passwordGenerated)
);

console.log(chalk.yellow("Password copied to clipboard"));
console.log(chalk.magenta(`Password strength: ${passwordStrength}`));
