// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location >= 42) {
        return location - 42;
    } else {
        return 42 - location;
    }
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startingLocation, endingLocation) {
    if (endingLocation >= startingLocation) {
        return (endingLocation - startingLocation) * 264;
    } else {
        return (startingLocation - endingLocation) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let totalDistance = distanceTravelledInFeet(start, destination);

    if (totalDistance < 400) {
        return 0;
    } else if (totalDistance > 2500) {
        return 'cannot travel that far';
    } else if (totalDistance < 2000) {

        return (totalDistance - 400) * .02;
    } else {
        return 25;
    }

}