
//import aaaaa from "readline-sync";

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`${this.age}歳です`);
    }

    speak(){
        console.log(`${this.name}ですニャー`);
    }
}

const cat1 = new Animal ("レイ", 18);
const cat2 = new Animal ("リン", 5);

console.log(cat1);
console.log(cat2);

cat1.greet();
cat2.greet();

cat1.speak();
cat2.speak();

class Hamster extends Animal {
    speakHum(){
    return this.name +"ですハム";
    }
}

const ham1 = new Hamster ("ダイフク", 2);

ham1.speak();

const daifuku = ham1.speakHum();

console.log(daifuku);

export default Animal;