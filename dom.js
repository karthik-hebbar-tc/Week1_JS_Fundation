let heading = document.getElementById("heading");

console.log(heading); 
console.dir(heading); 

// in css also we can give styles by id by using #
//#heading{ ...}

//.heading for selecting with class .

let headings = document.getElementsByClassName("head");

console.log(headings);
console.dir(headings); 


let para = document.getElementsByTagName("p");

console.log(para);
console.dir(para);

console.log("query selector");

let head1 = document.querySelector("p");
console.log(head1);

let head2 = document.querySelectorAll("p");
console.log(head2); 

//Properties in DOM manipulation

//1.tagName
console.log(heading.tagName);

//2. id
console.log(heading.id);

//3. className
console.log(heading.className);

//4. innerText
console.log(heading.innerText);

//5. innerHTML
console.log(heading.innerHTML);

//Modifying the properties

heading.innerText = "Hello from JS";

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.border = "2px solid green";

//to change multiple elements with class name

let heads = document.getElementsByClassName("head");

console.dir(document.firstChild);

