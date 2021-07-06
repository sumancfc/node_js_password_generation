const program = require('commander')
const chalk = require('chalk')
const createPassword = require("./helpers/createPassword")

program.version('1.0.0').description('Generate password using node js').

program
       .option('-l, --length <number>', 'Length of password',10)
       .option('-s, --save','Save the password')
       .option('-ns, --no-symbols', 'Remove symbols from password')
       .option('-nn, --no-numbers', 'Remove numbers from password')
       .parse()

// console.log(program.opts())
const { length, save, symbols, numbers } = program.opts()

const passwordGenerated = createPassword(length,symbols,numbers)

console.log(chalk.blueBright('Your Password is: ') + chalk.green(passwordGenerated))

