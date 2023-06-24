const inquirer = require('inquirer');
const fs = require('fs');

function generateREADME(answers) {
  const readmeTemplate = `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concerns, please contact:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: [${answers.email}](mailto:${answers.email})
`;

  fs.writeFile('README.md', readmeTemplate, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully generated!');
    }
  });
}

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
      name: 'license',
      message: 'Choose a license:',
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
      generateREADME(answers);
    })
    .catch((err) => {
      console.error(err);
    });
}

main();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();