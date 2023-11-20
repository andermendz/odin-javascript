let person = {
    name : "Anderson",
    lastName : "Mendoza",
    Age: 21,
    gender : "Male",
    degree: "Systems Engineering",
}

//console.log(person.name + " " + person.lastName)

person.lastName = "Mendoza Velasquez"

//console.log(person)

// basic constructor
function Player(name, mark){
    this.name = name;
    this.mark = mark;
    this.introduceYourself = function(){
        console.log("Hello, i'm " + this.name);
    };
}

let andermendz = new Player('Anderson', 'X');

andermendz.introduceYourself();