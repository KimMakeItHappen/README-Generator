// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  switch (license) {

    case 'MIT':
      response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;

    case 'Boost':
      response = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;

    case 'Mozilla':
      response = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;

  } return response

}


//function to generate readme based on user input
function generateMarkdown(input) {
  console.log(input);
  return `# ${input.name} \n 
${licenseBadge(input.license)} \n \n
## Description \n
${input.description} \n \n
## Table of Contents \n
- [Installation](#install) \n
- [Usage](#useinfo) \n
- [Contribution](#contribute) \n
- [Testing](#test) \n
- [License](#license) \n
- [Questions](#questions) \n \n
## Installation \n
${input.install} \n \n
## Usage \n
${input.useinfo} \n \n
## Contribution \n
${input.contribute} \n \n
## Testing \n
${input.test} \n \n
## License \n
This application is covered under the ${input.license} license. \n \n
## Questions \n
Contact Me Here: ${input.email} \n
Github: https://github.com/${input.github} \n` 
}

module.exports = generateMarkdown;