//functions and methods

function myFunction() {
  console.log("this is my function");
}

function myFunctions(msg) {
  console.log("message is : ", msg);
}

function sum(a, b) {
  s = a + b;
  return s;
}

let result = sum(4, 5);
console.log("sum = ", result);

myFunction();
myFunctions("Hello function with parameter");

//Arrow functions

const mySum = (a, b) => {
  console.log("sum using arrow function= ", a + b);
};

const mult = (a, b) => {
  return a * b;
};

//q - retuen vowels in a string

function countVowels(str) {
  let count = 0;
  // let vowels = "aeiouAEIOU";

  for (let ch of str) {
    if (
      ch == "a" ||
      ch == "e" ||
      ch == "i" ||
      ch == "o" ||
      ch == "u" ||
      ch == "A" ||
      ch == "E" ||
      ch == "I" ||
      ch == "O" ||
      ch == "U"
    ) {
      count++;
    }
  }

  console.log("no of vowels in string = ", count);
}

// create arrow function to perform same task.

const countVow = (str) => {
  let count = 0;

  for (let ch of str) {
    if (
      ch == "a" ||
      ch == "e" ||
      ch == "i" ||
      ch == "o" ||
      ch == "u" ||
      ch == "A" ||
      ch == "E" ||
      ch == "I" ||
      ch == "O" ||
      ch == "U"
    ) {
      count++;
    }
  }

  console.log("no of vowels in string = ", count);
};

//for -each loop/method.

let arr = [2, 4, 6, 8, 10];

arr.forEach((element, index, arr) => {
  console.log("element = ", element, "index = ", index, "array = ", arr);
});

//or

arr.forEach(function printval(element) {
  console.log("element using function = ", element);
});

//q - print squares of elements in array using for-each.

let array = [1, 2, 3, 4, 5];

array.forEach((el) => {
  console.log("square of ", el, " is ", el * el);
});

//or

let calSquare = (el) => {
  console.log("square of ", el, " is ", el * el);
};

array.forEach(calSquare);

//Array Methods

//1. map() - it returns a new array after performing operation on each element.

let arr1 = [1, 2, 3, 4, 5];

arr1.map((el) => {
  console.log("element using map = ", el);
});

let squaredArr = arr1.map((el) => {
  return el * el;
});

console.log("squared array using map = ", squaredArr);

//2. filter() - it returns a new array after filtering elements based on condition.

let arr2 = [10, 15, 20, 25, 30, 35, 40];

let filteredArr = arr2.filter((el) => {
  return el > 20;
});

console.log("filtered array using filter() = ", filteredArr);

//3. Reduce() - it returns a single value after performing operation on all elements of array.

let arr3 = [1, 2, 3, 4, 5];

let sumArr = arr3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log("sum of array elements using reduce() = ", sumArr);

//q - filteer out marks of students who scroed 90+
let marks = [78, 85, 92, 67, 89, 95, 88];

let topScorers = marks.filter((el) => {
  return el >= 90;
});

console.log("marks of top scorers = ", topScorers);

//q - take number n as input from user and create array from 1 to n, use reduce method to calculate sum of all num in array and use reduce to calculate product of all num in array.

let n = prompt("Enter a number n : ");

let arrr = [];

for (let i = 1; i <= n; i++) {
  arrr.push(i);
}

console.log("array from 1 to n = ", arrr);

let sumN = arrr.reduce((acc, curr) => {
  return acc + curr;
});

console.log("sum of array elements from 1 to n = ", sumN);

let productN = arrr.reduce((acc, curr) => {
  return acc * curr;
});

console.log("product of array elements from 1 to n = ", productN);
