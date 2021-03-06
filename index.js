const program = require('commander')
const chalk = require('chalk')
const clipboard = require('clipboardy')
const createPassword = require("./helpers/createPassword")
const savePassword = require("./helpers/savePassword")

program.version('1.0.0').description('Generate password using node js').

program
       .option('-l, --length <number>', 'Length of password',10)
       .option('-s, --save','Save the password')
       .option('-ns, --no-symbols', 'Remove symbols from password')
       .option('-nn, --no-numbers', 'Remove numbers from password')
       .parse()

// console.log(program.opts())
const { length, save, symbols, numbers } = program.opts()

const passwordGenerated = createPassword(length, symbols, numbers)

if(save){
   savePassword(passwordGenerated)
}


clipboard.writeSync(passwordGenerated)

console.log(chalk.blueBright('Your Password is: ') + chalk.green(passwordGenerated))

console.log(chalk.yellow('Password copied to clipboard'))

