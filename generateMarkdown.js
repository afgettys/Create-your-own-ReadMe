const base = require('markdown-badge');

function generateMarkdown(data) {
  return `${base("badge",
  `https://img.shields.io/badge/license-${data.license}-green.svg`,
  `https://github.com/${data.title}${data.projectName}${data.userName}${data.description}${data.instalation}${data.usage}${data.license}${data.contributors}`) 
}\n

#**TITLE**:
${data.title} 

##*PROJECT NAME*:
${data.projectName}

##USER NAME:
${data.userName}

##DESCRIPTION OF THE PROJECT:
${data.description}

##INSTALATION INSTRUCTIONS: 
${data.instalation}

##USAGE:
${data.usage}

##LICENSE:
${data.license}

##CONTRIBUTORS:
${data.contributors}
`
}

module.exports = generateMarkdown;
