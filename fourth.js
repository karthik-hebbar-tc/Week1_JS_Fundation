//Arrays.  (spl type of object)
let marks = [98,87,76,54,32];
console.log(marks);
console.log(marks.length); //property to find length of array

//accessing elements
console.log(marks[0]);
console.log(marks[2]);

//modifying elements
marks[2] = 100;
console.log(marks);

//print all elements using for loop
//1. for loop 
for(let i =0; i<marks.length; i++){
    console.log("marks ", i, " = ", marks[i]);

}

//2.for of loop
for(let el of marks){
    console.log("marks = ", el);
}

//q - given an array with marks of students , find avg marks of entire class.

let sMarks = [98,87,76,54,32];
let sum =0;

for(let m of sMarks){
    sum = sum + m;
}

let avg = sum/sMarks.length;
console.log(`avg marks of class =  ${avg}`);

//q2.

let item = [250,456,100,150];

for(let id =0; id<item.length; id++){
    let offer = item[id]/10;
    item[id] -= offer;
    console.log("item ", id, " after discount = ", item[id]);


}

//Array methods
// 1.push() - to add element at end
marks.push(45);
console.log(marks);

//2.pop() - to remove element from end
marks.pop();
console.log(marks);

//3. unshift() - to add element at beginning
marks.unshift(99);
console.log(marks);

//4. shift() - to remove element from beginning
marks.shift();
console.log(marks);

//5. indexOf() - to find index of an element
let idx = marks.indexOf(76);
console.log("index of 76 is ", idx);

//6. slice() - to extract a portion of array
let newMarks = marks.slice(1,4); //from index 1 to index 3
console.log("new marks array = ", newMarks);

//7. splice() - to remove or replace or add elements
marks.splice(2,1); //from index 2 , remove 1 element
console.log("marks after splice = ", marks);

//8. toString() - to convert array to string
let strMarks = marks.toString();
console.log("marks as string = ", strMarks);
console.log("type of strMarks = ", typeof strMarks);

//9. concat() - to merge two arrays
let moreMarks = [88,77,66];
let allMarks = marks.concat(moreMarks);
console.log("all marks = ", allMarks);  

//q 3
//for given array remove 1st company and remove uber and add ola on it splace and add amazon at athe end

let companies  = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift(1); //remove 1st company
companies.splice(2,1,"Ola"); //remove uber and add ola
companies.push("Amazon"); //add amazon at end

console.log("updated companies = ", companies);




