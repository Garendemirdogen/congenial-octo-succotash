// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title} ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation 

${data.install}

## Usage

${data.usage}

## Contributing

${data.contributors}

## Tests

${data.test}

## Questions

If you have any questions about this project, please contact me directly at ${data.email}. 
You can view more of my projects at https://github.com/${data.github}.

## License

This project is released under the ${data.license} license.
`;
};

// use for importing Markdown in index
module.exports = generateMarkdown;
