#!/usr/bin/node
/* task 2 statuscode js */

const request = require('request');
request(process.argv[2], function (error, response) {
  if (error == null) {
    console.log('code: ' + response.statusCode);
  }
});
