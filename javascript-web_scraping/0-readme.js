#!/usr/bin/node
/* task 0 readme js */

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
