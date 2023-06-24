const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // import from generate markdown

//passing through answers from prompt
function generateREADME(answers) {
    const readmeContent = generateMarkdown(answers);
//writing the README.md
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md successfully generated!');
      }
    });
  }
//function for prompts.
function main() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Create a title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Provide credits:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select license:',
      choices: [
        "none",
        "MIT",
        "GNU GPLv3",
        "Apache License 2.0",
      ],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
    .then((answers) => { 
      generateREADME(answers);//if no error it will call this function and start passing through the ansers
    })
    .catch((err) => {
      console.error(err); // else it will throw an error.
    });
}
// caling prompt
main();
