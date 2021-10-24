class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Aloha, I am ${this.name} and I am ${this.age} years old.`;
    }

    getDescription(){
        return `${this.name} - ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation = 'Nowhere'){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation
    }

    getGreeting(){
        let getGreeting = super.getGreeting();
        return this.homeLocation 
            ? `${getGreeting} I am  visiting from ${this.homeLocation}` 
            : super.getGreeting();
    }
}

const traveler = new Traveler('Charlie', 22, 'Brooklyn')
const traveler2 = new Traveler('Sam', 22)
console.log(traveler.getGreeting());
console.log(traveler.getDescription());
console.log(traveler2.getGreeting());
console.log(traveler2.getDescription());