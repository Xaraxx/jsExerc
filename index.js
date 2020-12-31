const person = {
    name: 'Mark',
    lastName: 'Luzt',
    age: 45,
    getFullName (){
        return this.name + " " + this.lastName
    }
}

console.log(person.getFullName())