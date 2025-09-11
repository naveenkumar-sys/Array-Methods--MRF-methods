/*
 1. [mangoe, orange, apple] add the word S to end of each string.
 2. [10,11,12,89,35,156,199,25,32,87] Find the numbers which are greater than 80 from given array.
 3. [10,12,15,16,8,11] Find the largest/ greates number in an array. 

 */


//1. [mangoe, orange, apple] add the word S to end of each string.
//Normal method without using map method
const arr=["mango","orange","apple"];
let new_array=[];
function add(arr1){
  for(let i=0;i<arr.length;i++)
  {
     new_array.push(arr[i]+"s");
  }
  return new_array;
}
let result=add()
console.log(result);


//1. Normal function with map Method
const ar=["mango","orange","apple"];
let result1=ar.map(function normal(i)
{
    return i+"s";
})
console.log(result1);

//2.Anonymous function using map method

const array=["mango","orange","apple"];
let result2=array.map(function(ele)
{
    return ele+"s";
})
console.log(result2);

//3.Arrow method using map method
const arr1=["mango","orange","apple"];

const res_final=arr1.map((element)=>{
  return element+"s";
})
console.log(res_final);


// 2. [10,11,12,89,35,156,199,25,32,87] Find the numbers which are greater than 80 from given array.

//1.normal function using filter method
const arr_list=[10,11,12,89,35,156,199,25,32,87];

let result4=arr_list.filter(function larger(numbers)
{
    return numbers>=80;
})
console.log(result4);

//2.Anonymous Function || Expression Function using filter method
const arr2_list=[10,11,12,89,35,156,199,25,32,87];

let result5=arr2_list.filter(function(number)
{
    return number>=80;
})
console.log(result5);


// 3.Arrow method using filter method
 let arr2=[10,11,12,89,35,156,199,25,32,87];

 let res=arr2.filter((elements)=>{
    return elements>=80;
 })
 console.log(res);

 //qn3

 //Normal function without using reduce method
const arr3=[10,12,15,16,8,11];
let largest=0;
 function greatest(arr3){
   for(let i=0;i<arr3.length;i++)
   {
     if(arr3[i]>largest)
     {
       largest=arr3[i];
     }
   }
   console.log( largest);
}
greatest(arr);


// 3. [10,12,15,16,8,11] Find the largest/ greates number in an array. 

//Arrow function using reduce method
 let arr4=[10,12,15,16,8,11];
 let final=arr4.reduce((max ,value)=>{
    if(value>max){
        max=value;
    }
    return max;
 },arr4[0])
 console.log(final);





