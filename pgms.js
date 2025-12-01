
let st = "karthik";
let reversed = "";

for(let i =st.length-1;i>=0;i--){
   reversed += st[i];

}

console.log("reversed string is ", reversed);

let st1 = "aba";
let freq = {};

for(let i =0; i<st1.length; i++){
    let ch = st1[i];



if(freq[ch]){
    freq[ch] +=1;
}
else{
    freq[ch] =1;
}
}
console.log("frequency of chars ", freq); 


//fizzbuzz

for(let i =0; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }         
}

//count vowels.

let str = "hello java Scriptii";

let count = 0;
let vowels = "aeiouAEIOU";

for(let ch of str){
    if(vowels.includes(ch)){
        count++;

    }
}

console.log("vowel counts are " ,count);

//max and min in array.
let arr = [9,2,3,4,5,1];

let max = arr[0];
let min = arr[0];

for(let num of arr)
{
    if(num>max){
        max = num;
    }
    if(num<min){
        min = num;
    }
}

console.log("max = ", max);
console.log("min = ", min);


//sum of evevn num

let sum = 0;

for(let num1 of arr){
    if(num1%2==0){
        sum +=num1;
    }
}

console.log("sum of even num = ", sum);


