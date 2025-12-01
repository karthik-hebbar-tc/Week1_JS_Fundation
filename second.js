let a =4;
let b =5;
let c = a+b;

// console.log("a+b =", a+b)
console.log(c);

//cond statemnets

let age = 21;

if(age>=18){
    console.log("U can vote");
}

else if(age<18){
    console.log("cant vote");
}

//ternary opertor.
age >18 ? "adult" : "Not adult"

age >18 ? console.log("adult") : console.log("Not adult")

//q1

// alert("Hellooo!!") //it gives a message 

// let num = prompt("enter a number") // it give message and takes input
let num = 5;
console.log("entered num is ", num);

if(num%5==0){
   console.log(num, " is multiple of 5"); 
}
else{
    console.log(num," num is not multiple of 5");
}
