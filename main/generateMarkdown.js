// generateMarkdown.js

//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'This application is covered under the [MIT License](https://opensource.org/licenses/MIT).';
    case 'Apache 2.0':
      return 'This application is covered under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).';
    case 'GPL 3.0':
      return 'This application is covered under the [GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0).';
    default:
      return '';
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
// template literal 
  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)                                   

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${licenseSection}

For more information about the license, click [here](${licenseLink}).

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or concerns, please contact:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})
`;

}
//export to use in index.js
module.exports = generateMarkdown;
