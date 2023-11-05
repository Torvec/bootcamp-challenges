// Creates a badge using shields.io for the license selected by the user (https://shields.io/badges/static-badge)
function renderLicenseBadge(license) {
   // Replace spaces in license name with %20 for URL using a regular expression
   const formattedLicense = license.replace(/ /g, '%20');
  
  switch (license) {
    case 'None':
      return '';
    case 'Apache 2.0':
    case 'GNU GPL v3.0':
    case 'MIT':
    case 'BSD 2 Clause':
    case 'BSD 3 Clause':
    case 'BSL 1.0':
    case 'CC0 v1.0 Universal':
    case 'EPL 2.0':
    case 'GNU Affero GPL v3.0':
    case 'GNU GPL v2.0':
    case 'GNU LGPL v2.1':
    case 'MPL 2.0':
    case 'The Unlicense':
      return `![Static Badge](https://img.shields.io/badge/License-${formattedLicense}-brightgreen)`;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  const chooseALicenseLink = 'https://choosealicense.com/licenses/';
  switch (license) {
    case 'None':
      return '';
    case 'Apache 2.0':
      return chooseALicenseLink + 'apache-2.0/';
    case 'GNU GPL v3.0':
      return chooseALicenseLink + 'gpl-3.0/';
    case 'MIT':
      return chooseALicenseLink + 'mit/';
    case 'BSD 2-Clause':
      return chooseALicenseLink + 'bsd-2-clause/';
    case 'BSD 3-Clause':
      return chooseALicenseLink + 'bsd-3-clause/';
    case 'BSL 1.0':
      return chooseALicenseLink + 'bsl-1.0/';
    case 'CC0 v1.0 Universal':
      return chooseALicenseLink + 'cc0-1.0/';
    case 'EPL 2.0':
      return chooseALicenseLink + 'epl-2.0/';
    case 'GNU Affero GPL v3.0':
      return chooseALicenseLink + 'agpl-3.0/';
    case 'GNU GPL v2.0':
      return chooseALicenseLink + 'gpl-2.0/';
    case 'GNU LGPL v2.1':
      return chooseALicenseLink + 'lgpl-2.1/';
    case 'MPL 2.0':
      return chooseALicenseLink + 'mpl-2.0/';
    case 'The Unlicense':
      return chooseALicenseLink + 'unlicense/';
  }
}

function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  const licenseHeader = '## License';
  // If there is no license, return an empty string
  if (license === 'None') {
    return '';
  } else {
    return `
${licenseHeader}
This project is licensed under the [${license}](${licenseLink}) license.
`;
  }
}

function generateMarkdown(data) {
  let licenseBadge = '[' + renderLicenseBadge(data.license) + ']';
  let licenseLink = '(' + renderLicenseLink(data.license) + ')';  
  const licenseSection = renderLicenseSection(data.license);
  
  let tableOfContents = `- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;

  if (data.license === 'None') {
    tableOfContents = `- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
    licenseBadge = '';
    licenseLink = '';
  }

  return `# ${data.title}
${licenseBadge}${licenseLink}

## Description

${data.description}

## Table of Contents

${tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}
${licenseSection}
## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me at ${data.email} or visit my GitHub page at [${data.github}](https://github.com/${data.github}).`;
}

module.exports = generateMarkdown;
