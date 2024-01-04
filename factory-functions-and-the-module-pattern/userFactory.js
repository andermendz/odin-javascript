function createUser (name){
    const discordName = '@' + name;

    let reputation = 0;

    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReputation, giveReputation}
}


const ander = createUser('ander');

console.log(ander.getReputation())

ander.giveReputation();
ander.giveReputation();

console.log(ander.getReputation());

console.log({name: ander.name, reputation: ander.getReputation()});


// Prototypal inheritance with factories


function createPlayer(name, level){
    const {discordName, getReputation} = createUser(name);
    


    const getLevel = () => level;
    const increaseLevel = () => level++;

    return {name, discordName, getReputation, increaseLevel, getLevel}
}


const andermendz = createPlayer('andermendz','10');

andermendz.increaseLevel();

console.log('Your gamer level is: ' + andermendz.getLevel())