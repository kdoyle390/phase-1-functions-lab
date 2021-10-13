let pickUpLocation;
let destination;
let feet;

const distanceFromHqInBlocks = function(pickUpLocation) {
    let blocks;
    if (pickUpLocation > 42) {
        blocks = pickUpLocation - 42; 
        return blocks;
    } else if (pickUpLocation < 42) {
        blocks = 42 - pickUpLocation;
        return blocks;
    }   
}

 function distanceFromHqInFeet(pickUpLocation) {
    feet = distanceFromHqInBlocks(pickUpLocation) * 264;
    return feet;
 }

const distanceTravelledInFeet = function(pickUpLocation, destination) {
    let distanceInBlocks;
    if (pickUpLocation > destination) {
        distanceInBlocks = pickUpLocation - destination; 
    } else if (pickUpLocation < destination) {
        distanceInBlocks = destination - pickUpLocation;
    }
    feet = distanceInBlocks * 264;
    return feet;
}
    
function calculatesFarePrice(pickUpLocation, destination) {
    let fare;
    feet = distanceTravelledInFeet(pickUpLocation, destination);
    if (feet <= 400) {
        fare = 0;
        return fare;
    } else if (feet > 400 && feet <= 2000) {
        fare = (feet - 400) * 0.02;
        return fare;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else if (feet >= 2500) {
        return 'cannot travel that far';
    }
}