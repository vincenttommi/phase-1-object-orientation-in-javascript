// rewriting out first function

class Person{




    constructor(name,age){

     this.name = name;
     this.age = age;



    }

    SayHello(){



        console.log(`Hello,  my name is ${this.name}.`);


    }

    sayAge(){


        console.log(` I am ${this.age} years old`);

    }

 
  haveBirthday(age){


    console.log(`it's my  birthday!`);
    this.age += 1;
  }
}


let evan = new Person('evans', 34);


evan.SayHello();

evan.haveBirthday();

evan.sayAge();


evan;


