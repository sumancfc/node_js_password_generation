# Node.js Password Generation

A simple Node.js project to generate secure passwords with customizable options. This project uses TypeScript, Commander.js, Chalk, and Clipboardy.

## Features

- Generate passwords with customizable length
- Option to include/exclude symbols and numbers
- Customizable character sets, including specific symbols and numbers
- Password strength indicator
- Save generated passwords to a file
- Copy passwords to the clipboard

## Prerequisites

- Node.js (v20.15.1 or higher)
- npm (v7.24.1 or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sumancfc/node_js_password_generation.git
   cd node_js_password_generation
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Usage

1. Build the Project

   ```sh
   npm run build
   ```

2. Compile the frontend script

   ```sh
   npm run compile-client
   ```

3. Run the project with the desired options:

   ```sh
   npm start -- -l <length> --no-symbols --no-numbers -s -c <customSet>
   ```

### Options

- `-l, --length <number>`: Length of the password (default: 12)
- `--no-symbols`: Remove symbols from the password
- `--no-numbers`: Remove numbers from the password
- `-s, --save`: Save the password to `generatedPasswords.txt`
- `-c, --custom <string>`: Custom character set

## Password Strength Indicator

The generated password's strength is displayed based on the following criteria:

- Very Weak
- Weak
- Moderate
- Strong
- Very Strong

## Tests

This project includes a comprehensive set of tests to ensure functionality and reliability. The tests cover various aspects of password generation, including length, symbols, numbers, custom character sets, and password strength.

1. Run the tests

   ```sh
   npm test
   ```

## Project Structure

```sh
node_js_password_generation/
      ├── dist/                   # Compiled JavaScript files
      ├── src/                    # Source files
      │   ├── __tests__/          # Test files
      │   │   ├── calculateStrength.test.ts
      │   │   ├── createPassword.test.ts
      │   │   ├── server.test.ts
      │   ├── helpers/            # Helper functions
      │   │   ├── calculateStrength.ts
      │   │   ├── createPassword.ts
      │   │   ├── savePassword.ts
      │   ├── public/             # Public assets (for frontend)
      │   │   ├── script.ts
      │   │   ├── style.css
      │   ├── views/              # EJS templates
      │   │   ├── index.ejs
      │   ├── app.ts              # Express app setup
      │   ├── index.ts            # Main entry point
      │   ├── server.ts           # Server listener
      ├── .gitignore
      ├── jest.config.ts          # Jest configuration file
      ├── package-lock.json
      ├── package.json
      ├── README.md
      └── tsconfig.json
```
