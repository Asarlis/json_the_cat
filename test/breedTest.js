const assert = require('chai').assert;
const breedFetchDescription = require('../breedFetcher.js');

describe('#breedDetailsFromapi', () => {
  it('logs no entry detected if not value passed', () => {
    const actual = breedFetchDescription('');
    const expected = console.log("No entry detected")
    assert.equal(expected, run)
  });
  it('returns a description of the breed', () => {
    const actual = breedFetchDescription("char");
    const expected = "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.";
    assert.equal(expected, run)
  });
  
});