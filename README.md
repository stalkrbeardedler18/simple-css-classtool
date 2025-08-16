# Simple CSS ClassTool

## Overview

The Simple CSS ClassTool is a lightweight tool aimed at helping web developers streamline their CSS class creation process. With the rise of component-based design, managing CSS classes can become cumbersome. This tool facilitates the auto-generation of reusable class snippets based on user-defined criteria.

## Features
- Generate CSS classes with common styles based on user inputs.
- Easy-to-use command line interface (CLI).
- Option to save generated classes to a local stylesheet.
- Preview generated CSS snippets directly in the terminal.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-css-classtool.git
   cd simple-css-classtool
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Run the tool with the following command:
```bash
node index.js --class-name <Your Class Name> --properties <Your Properties>
```

## Example

Generating a utility class for a button:
```bash
node index.js --class-name button --properties "bg-blue text-white padding-10"
```
This command will generate a CSS snippet for a button with a blue background, white text, and padding of 10 pixels.

## Contribution

Contributions are welcome! Please feel free to submit a pull request or report any issues.

## License

This project is licensed under the MIT License.
