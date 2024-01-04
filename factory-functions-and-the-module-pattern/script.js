let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge (age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);



// Closures

function makeAdding (firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
      // "second" is scoped within the resulting function
      const second = secondNumber;
      return first + second;
    }
  }
  // but we've not seen an example of a "function"
  // being returned, thus far - how do we use it?
  
  const add5 = makeAdding(5);
  console.log(add5(2)) // logs 7



  // Factory functions

   // hey, this is a constructor - 
  const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
  }
 
  // then this can be refactored into a factory!
  
  function createUser (name) {
    const discordName = "@" + name;
    return { name, discordName };
  }
  // and that's very similar, except since it's just a function,
  // we don't need a new keyword

  // object vs function

//   const name = "Bob";
// const age = 28;
// const color = "red";

//const thatObject = { name: name, age: age, color: color };

// with function
// const nowFancyObject = { name, age, color };