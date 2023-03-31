let  name = "evans";
let age = 34;



function sayHello(nameofPerson){

 console.log(`Hello,  my name is ${nameofPerson}.`);



}


function sayAge(age){


    console.log(`I am ${age} years old`);
}


function  haveBirthday(age){
    return age + 1;

}


sayHello(name);


sayAge(age);
// I am 34  years old
age = haveBirthday(age);
sayAge(age);

