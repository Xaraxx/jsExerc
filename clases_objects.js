class Person {
    constructor (name){
        this.name = name
    }

    getName(){
        return this.name
    }
}

const person = new Person("Jorge")
let personName = person.getName()
console.log(personName)