const base = require('markdown-badge');

function generateMarkdown(data) {
  return `
  ${base("badge",
  `https://img.shields.io/badge/license-${data.license}-blue.svg`,
  `https://github.com/${data.title}/${data.projectName}/${data.userName}/${data.description}/${data.instalation}/${data.usage}/${data.license}/${data.contributors}`)
  }
  
  # ${data.title};
  Alt-H1
  # ${data.projectName};
  ### ${data.userName};
  ### ${data.description};
  ### ${data.instalation};
  ### ${data.usage};
  ### ${data.license};
  ### ${data.contributors}`;

}

module.exports = generateMarkdown;

//markdown from npm // 