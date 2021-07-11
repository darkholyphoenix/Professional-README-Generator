// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
  {if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== 'None') {
  return `\n* [License](#license)\n`;
}
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== 'None') {
  return `## License
  
  This project is licensed under the ${license} license.`;
}
return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Title
  ${data.title}
  
  ## Description 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  

  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## Credits 
  ${data.credit}

  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

  ## Badges

  ## Features

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions:
  Here is a link to my GitHub Profile: ${data.userName}, ${data.userLink}
  If you have any questions regarding this code please send me an email at ${data.email}.
  

`;
}

module.exports = generateMarkdown;
