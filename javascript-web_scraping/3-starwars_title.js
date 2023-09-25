#!/usr/bin/node
/* task 3 starwars title js */

const request = require('request');
const id = process.argv[2];
request('https://swapi-api.hbtn.io/api/films/' + id + '/', function (error, response, body) {
  if (error == null) {
    const json = JSON.parse(body);
    console.log(json.title);
  }
});
