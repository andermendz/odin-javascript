function person(name,surname)  {
    this.name = name,
    this.surname = surname,


    Object.defineProperty(this, 'fullName', {
        get() {
            return `${this.name} ${this.surname}`;
        }, 
        set(value){
            [this.name, this.surname] = value.split(' ');
        }
    });
}


let Anderson = new person('Anderson','Mendoza');

alert(Anderson.fullName)