const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const symbols = '!@#$%^&*()_+='
const numbers = '0123456789'

const createPassword = ( length, hasSymbols, hasNumbers ) => {
       let characters = alphabets

       hasSymbols === true && (characters += symbols)
       hasNumbers === true && (characters += numbers)

       return passwordGenerated(length,characters)
}

const passwordGenerated = (length,characters) =>{
       let password = ''

       for(let i=0; i<length; i++) {
              password += characters.charAt(Math.floor(Math.random() * characters.length))
       }

       return password
}

module.exports = createPassword