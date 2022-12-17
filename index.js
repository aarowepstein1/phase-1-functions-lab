const hq = 42;
function distanceFromHqInBlocks(pickup) {
    if (hq >= pickup) {
        const blocks = hq - pickup;
        return blocks;
    }
    else {
        const blocks = pickup - hq;
        return blocks;
    }
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination >= start) {
        const blocks = destination - start;
        const distanceInFeet = blocks * 264;
        return distanceInFeet;
    }
    else {
        const blocks = start - destination;
        const distanceInFeet = blocks * 264;
        return distanceInFeet;
    }
}

function calculatesFarePrice (start, destination) {
    const feetPrice = distanceTravelledInFeet(start,destination);
    if (feetPrice <= 400) {
        const fare = 0;
        return fare;
    } else if (feetPrice <= 2000) {
        const fare = (feetPrice - 400) * .02;
        return fare;
    } else if (feetPrice <= 2500) {
        //const fare = 25;
        return 25;
    } else {
        return "cannot travel that far"
    }
}