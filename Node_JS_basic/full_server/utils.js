const fs = require('fs').promises;

async function readDatabase(path) {
  // get the file data asynchronously
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const stringData = data.toString();

      const arrayData = stringData.split('\n').slice(1);

      const filteredArrayData = arrayData.filter((line) => line !== '');

      const namesByField = {};

      filteredArrayData.forEach((line) => {
        const parts = line.split(',');
        const firstName = parts[0];
        const field = parts[3];

        if (!namesByField[field]) {
          namesByField[field] = [];
        }

        namesByField[field].push(firstName);
      });
      return namesByField;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = readDatabase;
