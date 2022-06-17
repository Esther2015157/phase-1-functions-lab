// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42){
        let blocks = blockNumber - 42;
        return blocks;
    } else {
        let blocks = 42 - blockNumber
        return blocks;
    }
}

function distanceFromHqInFeet(blockNumber){
    if (blockNumber > 42){
        let feet = ((blockNumber - 42) * 264)
        return feet;
    } else {
        let feet = ((42 - blockNumber) * 264);
        return feet;
    }
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        let distanceInFeet = ((destination - start) * 264)
        return distanceInFeet;
    } else {
        let distanceInFeet = ((start - destination) * 264)
        return distanceInFeet
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
        if (distance <= 400) {
            return 0;
        } else if (distance > 400 && distance <= 2000){
            return (distance - 400) * .02
        } else if (distance > 2000 && distance < 2500){
            return 25 
        } else if (distance > 2500){
            return 'cannot travel that far'
        }
    } 