const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const symbols = '!@#$%^&*()_+='
const numbers = '0123456789'

const createPassword = (length, hasSymbols, hasNumbers ) => {
       let characters = alphabets

       hasSymbols === true && (characters += symbols)
       hasNumbers === true && (characters += numbers)

       return characters
}

module.exports = createPassword