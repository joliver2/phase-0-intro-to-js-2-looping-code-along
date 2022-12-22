for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

function writeCards(names, event) {
    const cardArray = [];
    for(let i = 0; i < names.length; i++) {
        cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardArray;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--
    }
}