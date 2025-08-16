// Simple CSS ClassTool

const fs = require('fs');
const { Command } = require('commander');

const program = new Command();

program
  .version('1.0.0')
  .option('--class-name <name>', 'CSS class name')
  .option('--properties <properties>', 'CSS properties, space-separated')
  .action((options) => {
    const { className, properties } = options;
    if (className && properties) {
      const cssSnippet = generateCSS(className, properties);
      console.log(`Generated CSS Snippet:\n${cssSnippet}`);
    } else {
      console.log('Please provide both class-name and properties.');
    }
  });

program.parse(process.argv);

function generateCSS(className, properties) {
  const propertiesArray = properties.split(' ');
  return `.${className} {\n  ${propertiesArray.join(';\n  ')};\n}`;
}

// Placeholder for potential file saving logic
// fs.writeFileSync('styles.css', cssSnippet);

