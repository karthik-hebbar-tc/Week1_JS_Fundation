for(let i =1; i<=5; i++){
console.log("hi forloop")
}

let sum =0;

for(let i =1; i<=5; i++){
sum +=i;
}

console.log("sum= ", sum);

//while loop

let i =1;
while(i<=10){
    console.log("While loop");
    i++;
}

//do-while

let i1 =1;
do{
console.log("do while loop");
i++;
}while(i<=5);

//for-of-loop

let str = "Hiforof";

for(let st of str){
    console.log(st);
}

//for-in-loop

let student = {
    name : "hebb",
    age : 20,
    cgpa : 8,
    isPass : true
};

for(let st in student){
    console.log("key= ", st);
    //or
    console.log("key = ", st, "value= ", student[st]);
}


//q--gues number

let num =26;
let guessNum = prompt("Guess the num : ");

while(guessNum != num){
    guessNum = prompt("you have enterd wrong num try agaian");
}

console.log("Congrats u have guessed correct number");


//strings
//create string 
let st = "karthik hi";

console.log(st.length);

console.log(st[0]);

//String literals
let st1 = `i have ${1+5} ruppes`;
console.log(st1);

let obj ={
    name : "karthik",
    age : 21
};

let out = `my name is ${obj.name} and my age is ${obj.age}`;
console.log(out);