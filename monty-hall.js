// Monty Hall Code Challenge Solution in JS
// GOAL: run the simulation 10,000 times and demonstrate that it is indeed a 2/3 chance of winning by switching your door choice vs a 1/3 chance of winning by keeping your original choice. 


// Write a function to set up the initial variables
function montyHall(toSwitch) {
    
    // set 1 of 3 doors to have the car
    let carDoor = Math.floor(Math.random() * 3);

    // set 1 of 3 doors to be chosen by contestant
    let chosenDoor = Math.floor(Math.random() * 3);

    // set the door to be revealedDoor.  It cannot be the carDoor or the chosenDoor
    let revealedDoor = [0,1,2].find((door) => door !== carDoor && door !== chosenDoor);


    // set up the conditional option to switch doors
    if(toSwitch){
        return carDoor === [0,1,2].find((door) => door !== chosenDoor && door !== revealedDoor)
    }
    else {
        return carDoor === chosenDoor
    }

}

// Write a function to simulate the game
function simulateGame(num, toSwitch) {

    let gamesWon = 0;

    for(let i = 0; i < num; i++){
        gamesWon += montyHall(toSwitch)
    }

    return gamesWon
}

// console log the results for 10,000 simulations when contestant chooses to switch
console.log(simulateGame(10000, toSwitch = true))

// console log the results for 10,000 simulations when contestant doesn't change their selection
console.log(simulateGame(10000, toSwitch = false))