'use strict;';
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback('error:', error);
    }
    const data = JSON.parse(body);
    const breed = data[0]

    if (breed) {
      callback(null, breed.description)
    } else {
      callback(`Failed to find breed ${breedName}`);
    }
  });
};

module.exports = {
  fetchBreedDescription
}
