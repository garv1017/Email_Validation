# Introduction to Regular Expressions

Regular expressions are sequences of characters that define a search pattern. These patterns are widely used for string searching and manipulation. In validation, regex helps ensure that strings such as email addresses and passwords conform to expected formats.

## Basic Syntax

- **Literals**: Ordinary characters like `'a'`, `'1'`, or `'%'`.
  
- **Metacharacters**: Characters with special meanings, like:
  - `.`: Matches any character.
  - `^`: Start of string.
  - `$`: End of string.
  
- **Character Classes**: Sets of characters, like `[a-z]` for any lowercase letter.

### Digital Characters

- `\d`: Matches any digit (0-9).
- `\D`: Matches any non-digit.

### Whitespace Characters

- `\s`: Matches any whitespace character (including spaces, tabs, and line breaks).
- `\S`: Matches any non-whitespace character.

### Quantifiers

- `+`: One or more times.
- `*`: Zero or more times.
- `{1,3}`: Between one and three times.

### Escape Characters

- Use a backslash (`\`) to escape special characters:
  - `\.`: Matches a literal dot.
  - `\$`: Matches a dollar sign `$`.
  - `\^`: Matches a caret `^`.

## Practice: Email Validation

To validate an email, we want to check three main things:

1. **Local Part**: The part before the `@` symbol.

2. **Domain**: The part after the `@` symbol and before the top-level domain (TLD).

3. **Top-Level Domain (TLD)**: The last part following the last dot.
