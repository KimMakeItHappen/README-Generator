function renderLicenseBadge([license]) {
  console.log(license);
  switch (license) {
    case 'Apache License 2.0':
      return `![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)`;
    case 'GNU Public License v3.0':
      return `![License](https://img.shields.io/badge/license-GNU%20Pub%203.0-blue.svg)`;
    case 'Open Software License 3.0':
      return `![License](https://img.shields.io/badge/license-Open%20Software%203.0-brightgreen.svg)`;
    case 'MIT':
      return `![License](https://img.shields.io/badge/license-MIT-red.svg)`;
    case 'Mozilla Public License 2.0':
      return `![License](https://img.shields.io/badge/license-Mozilla%202.0-yellow.svg)`;
    default: 'Your wrong';
      break;
  };
};

function renderLicenseLink([license]) {
  switch (license) {
    case 'Apache License 2.0':
      return `![Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)`;
    case 'GNU Public License v3.0':
      return `![GNU Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
    case 'Open Software License 3.0':
      return `![Open Saftware License 3.0](https://opensource.org/licenses/OSL-3.0)`;
    case 'MIT':
      return `![MIT License](https://opensource.org/licenses/MIT)`;
    case 'Mozilla Public License 2.0':
      return `![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
    default: '';
      break;

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# **${data.title}**
  ${renderLicenseBadge(data.license)}
  ## Description:
  ${data.description}
  ## Table of Contents:
  \n[Description](#description)
  \n[Installation](#installation)
  \n[Usage](#usage)
  \n[License](#license)
  \n[Contributing](#contributing)
  \n[Testing](#tests)
  \n[Repository Link](#repo)
  \n[GitHub Information](#githubUsername)
  \n[Questions](##questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  
  This application is covered by the ${data.license} license.
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Repository
  - [Project Repo](${data.repo})
  ## Questions
  If you have any questions please send an e-mail to ${data.questions} or visit to review code https://github.com/${data.githubUsername}
`;
}

module.exports = generateMarkdown;