const base = require('markdown-badge');

function generateMarkdown(data) {
  return `
  ${base("badge",
  `https://img.shields.io/badge/license-${data.license}-blue.svg`,
  `https://github.com/${data.title}/${data.projectName}/${data.userName}/${data.description}/${data.instalation}/${data.usage}/${data.license}/${data.contributors}`)
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

![Screenshots.](image/screenshot.jpg)
`
}

module.exports = generateMarkdown;
