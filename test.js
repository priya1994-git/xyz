const index = require('./index')
const assert = require('assert')

it("returns maximum of two numbers", () => {
    assert.equal(index.maximum(1,2), 2);
});