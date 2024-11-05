

## Email Validation Project Overview

This project demonstrates the use of regular expressions (regex) for validating email addresses in JavaScript. Regular expressions are powerful tools for matching patterns in strings, making them ideal for validating user inputs like email addresses, ensuring they adhere to standard formats.

### Features

- Validates email addresses using a comprehensive regex pattern.
- Provides clear feedback on the validity of the input email.

## How It Works

The project includes a JavaScript function, `validateEmail`, which checks whether the provided email address is in a valid format. The regex pattern used for validation checks the following:

1. **Local Part**: The section before the `@` symbol can include alphanumeric characters and certain special characters (e.g., `.`, `%`, `_`, `+`).
2. **Domain Part**: Must contain at least one period, with a valid top-level domain (TLD) consisting of at least two alphabetic characters.

### Screenshot of Regular Expression 104

Below is a screenshot illustrating **Regular Expression 104**, which visually represents the regex pattern and its components:

![Screenshot 2024-11-05 235024](https://github.com/user-attachments/assets/1c91a392-719e-4e2b-8594-5bba70a21a7c)

## Example Usage

To use the email validation function, simply call it with an email string:

```javascript
const validateEmail = require('./validateEmail');

console.log(validateEmail("john.doe@example.com")); // true
console.log(validateEmail("invalid..dot@domain.com")); // false
