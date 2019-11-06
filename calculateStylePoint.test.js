const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should return correct style points (min and max points ignored)', () => {
        const testStylePoints = calculateStylePoints([17.5, 18.5, 18.0, 18.0, 19.0])
        const expected = 54.5;
        
        assert.equal(testStylePoints, expected)
    });
});