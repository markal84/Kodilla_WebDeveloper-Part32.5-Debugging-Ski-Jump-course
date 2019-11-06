const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    it('should return normalSkijump  points', () => {

        const testDistNormal = calculateDistancePoints(106, 98, 98);

        const expected = 76;

        assert.equal(testDistNormal, expected);
    });
    it('should return bigSkiJump points', () => {
        const testDistBig = calculateDistancePoints(128, 120, 120);

        const expected = 74.4;

        assert.equal(testDistBig, expected);
    });
    it('should return mammothSkiJump points', () => {
        const testDistMammoth = calculateDistancePoints(223, 200, 200);

        const expected = 147.6;

        assert.equal(testDistMammoth, expected);
    });

});