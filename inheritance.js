class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("James");
const baby2 = new Child("Bond");
console.log(baby.getFullName());
console.log(baby2.getFullName());