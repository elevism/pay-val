const labels = require('./labels.json');
const shell = require('shelljs');

for (const label of labels) {
  shell.exec(`gh label create "${label.name}" --color "${label.color}" --description="${label.description}" --force`);
}
