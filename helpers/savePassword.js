const fs = require('fs')
const os = require('os')
const path = require('path')
const chalk = require('chalk')

const savePassword = (password) => {
       fs.open(path.join(__dirname,'../','generatedPasswords.txt'),'a',666,(e,id) => {
              fs.write(id,password + os.EOL, null, 'utf-8', () => {
                     fs.close(id, () => {
                          console.log(chalk.greenBright('Passwors saved to generatedPasswords.txt'))
                     })
              })
       })
}

module.exports = savePassword