#!/usr/bin/node
/* task 1 writeme js */

const fs = require('fs');

const filePath = process.argv[2];
const textData = process.argv[3];

fs.writeFile(filePath, textData, 'utf-8', function (err) {
  if (err) { console.log(err); }
});
