// rewriting out first function

class Person{




    constructor(name,age){

     this.name = name;
     this.age = age;  // accessing the data 



    }

    SayHello(){



        console.log(`Hello,  my name is ${this.name}.`);


    }

    sayAge(){
        ///methods   have access to  out data 


        console.log(` I am ${this.age} years old`);

    }

 
  haveBirthday(age){


    console.log(`it's my  birthday!`);
    this.age += 1;
  }
}


let sarah  = new Person('sarah', 34);
let vincent = new Person('vincent', 50);
let restaurant = new Restaurant('La Villa', '261 5th Ave',Brooklyn, nys);






// restaurant.addGuest(tommi);
// restaurant.addGuest(vincent);
// restaurant.addGuest(brayo);
// restaurant.serveGuest(evans, new Drink('water'));
// restaurant.serveGuest(kirubi, new Drink('alcohol'));





// tommi.evan.saySmallTalk();
