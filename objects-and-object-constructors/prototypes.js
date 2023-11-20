Person = function(name) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduceYourself = function (){
    return ("My name is " + this.name)
}



Player = function(name, score) {
    this.name = name;
    this.score = score;
}

Player.prototype.scoreIs = function(){
    return ("the player score is " + this.score);
}

let ander = new Player("Anderson", 21);

Object.setPrototypeOf(Player.prototype, Person.prototype);

console.log(ander.introduceYourself())