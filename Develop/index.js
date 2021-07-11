// TODO: Include packages needed for this application
//const {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown} = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js')

const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
            type: 'input',
            name: 'title',
            message: 'Please give a title to your README! (Required)',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('You need to enter a title name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Please provided the steps required to install your project! (Required)',
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('You need to enter steps for installion to utitlize your code!');
                return false;
              }
            }
          },

          {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for use of your code! (Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('You need to enter instruction for use of your code!');
                return false;
              }
            }
          },
    ////// Credit

        
          {
            type: 'input',
            name: 'credit',
            message: 'What is the name of your collaborator?',
            },
          {
            type: 'link',
            name: 'collablink',
            message: 'Enter the GitHub link to your collaboroators GitHub. (Required)',
            
          },
          {
            
                type: 'input',
                name: 'contributing',
                message: 'Enter any guidelines of if you would like other developers to contribute.',
                
            
          },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter any tests that were run as well as provide examples',
                
              },
          


//////// License
{
    type: 'checkbox',
    name: 'license',
    message: 'What license you would like to use? ',
    choices: ['No License', 'Apache', 'MIT', 'GNU', 'ISC'],

  },

/////// Badges
{
    
        type: 'input',
        name: 'userName',
        message: 'Enter your gitHub username',
        validate: userNameInput => {
            if (userNameInput) {
              return true;
            } else {
              console.log('You need to enter a gitHub username!');
              return false;
            }
          }

  },

  {
    
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter your email');
          return false;
        }
      }

},

{
    type: 'link',
    name: 'userLink',
    message: 'Enter the GitHub link to your repository. (Required)',
    validate: userLinkInput => {
        if (userLinkInput) {
          return true;
        } else {
          console.log('You need to enter your email');
          return false;
        }
      }
  },
];


///TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName)
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
    };



// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userAnswers) => { 
        //user answers needs to be a string
        writeToFile("README.md", generateMarkdown(userAnswers));
    }) 


 }

// // Function call to initialize app
 init();

