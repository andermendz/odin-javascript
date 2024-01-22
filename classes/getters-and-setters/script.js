let person = {
    name: 'John',
    surname: 'Doe',

    get personFullName(){
        return `${this.name}  ${this.surname}` ;
    },

    set personFullName(value){
        [this.name, this.surname] = value.split(' ');

    }
}


person.personFullName = 'Anderson Mendoza';

alert(person.name + ' ' + person.surname)