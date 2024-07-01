class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    toString() {
        return `Person[name=${this.name}, age=${this.age}, gender=${this.gender}, address=${this.address}]`;
    }
}

const person1 = new Person("vignesh", 30, "Male", "chennai");

console.log(person1.toString());  

person1.setAge(31);
console.log(person1.getAge());  
person1.setAddress("456 Elm St, Othertown, USA");
console.log(person1.toString());  
