// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is license under ${data.license}
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.test}

`;
};

// use for importing Markdown in index
module.exports = generateMarkdown;
