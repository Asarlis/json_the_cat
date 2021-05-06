'use strict;';
const request = require('request');
const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  if (error) {
    return console.log('error:', error);
  }
  const data = JSON.parse(body);
  const breed = data[0]
  
  if (breed) {
    console.log(breed.description)
  } else {
  console.log(`Failed to find breed ${input}`);
  }
});



