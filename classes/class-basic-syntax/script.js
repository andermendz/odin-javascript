class Person {

    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    get userName(){
        return `your username is: ${this.username} `;    
    }

    set userName(username) {
        this.username = username;
   

    }

    
    SayHi(){
        alert('Hi, my username is ' + this.username)
    }
}




let Anderson = new Person('andermendz', 'anderson@gmail.com');

Anderson.userName = 'andermendzEdited';

Anderson.SayHi();