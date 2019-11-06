const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let normalSkiJump = 60 + (2 * (distance - kPoint));
    let bigSkiJump = 60 + (1.8 * (distance - kPoint));
    let mammothSkiJump = 120 + (1.2 * (distance - kPoint));

    if (hillSize >= 98 && hillSize < 120) {
        return (normalSkiJump);
    } else if (hillSize >= 120 && hillSize < 200 ) {
        return (bigSkiJump);
    } else {
        return (mammothSkiJump);
    }

};

module.exports = calculateDistancePoints;