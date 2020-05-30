const base = require('markdown-badge');
function generateMarkdown(data) {
  return `${base}${data.title}`;
}

module.exports = generateMarkdown;

//markdown from npm // 