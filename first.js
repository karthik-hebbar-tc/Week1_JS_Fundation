// console.log("Hi js");

name = "Karthik";
let age = 26;

var age4 = 24; //can re-declare and update.
var age4 = 22;

let agen = 21;
// let agen = 22; - we cant re-declare.
agen = 25;

const age2 = 27;

// age2 =23; - we cant update.

let x = BigInt("222");
let y = Symbol("Hi!@#");

// console.log(name);   //typeOf name(we can check in console)
// console.log(x);
// console.log(y);

//collections example-
const student = {
  fName: "hebbar",
  ages: 27,
  marks: 9,
  isPass: true,
};

console.log(student); // to access - student["fName"] or...

console.log(student.ages); // or console.log(student["ages"])

console.log(student.fName);

student["ages"] = student["ages"] + 1;
student["fName"] = "hebb";

console.log(student.ages);

console.log(student.fName);
