// What is the difference between double equal and triple equal comparison operator. Explain with example.
// ANS// the different is between double equal and triple equal that double equal take all same value and it dose not ckeck data type but triple equal does check data type

// What is the difference between if statement and ternary operator. Explain the difference with example.
// let num1=23  ,let num2=34
// if(num1>num2){console.log("yes")}else{console.log("no")}
// (num1>num2)?console.log("yes"):console.log("no");


// What are truthy and falsy values. List all the falsy values and 5 truthy values.
// ANS// the value convert to boolean and give true ,is truthy value and give false ,is falsy value
//  truthy value// 1,"3" ,"name" ,555<+-89
// falsy value//  false," ",null,undefined,0


// What are the main difference between a primitive and non-primitive values? Explain with example
// primitive value is predifine value and non primitive is define by user which take primitive value
// primitive //string,number
// non primitive//{name:"ajay"}

// Go through this blog https://javascript.info/coding-style and re-format the code below.

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }
// let ans=pow(2,10)
// console.log(ans)




// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }


let total =1
for(let i=1;i<=10;i++){
    total*=i
    console.log(total)
}
 
// Write the output (true / false) next to each line of code:

// "hello world" === "hello world"; // true

// "hello world" == "hello world";// true

// true === true; //true

// 77 == "77";  //true

// 77 === "77";  //false

// "cat" === "dog";  //false

// false === 0;  //false

// false == 0; //true

// 0 == "";  //true

// "" == false; //true

// null == null;//true

// undefined == undefined;  //true

// null == undefined;  //true

// null == 0; //false

// null == 21;  //false

// null == "null";  //false

// undefined == "undefined";  //false

// undefined == 0;  ///false

// undefined == false;  //false

// undefined == "false";  //false

// NaN == null;  //false

// NaN == "NaN";  //false

// NaN == 0;  //false

// NaN == false;  //false

// NaN == undefined;  // false

// NaN == NaN; //false

// 2 > 1;  //true

// 2 != 1;  //true

// "Z" > "A";  //true

// "Hello World" > "Super Mario";  //false

// "Hello World" != "Super Mario";  //true

// NaN !== NaN;  // true

// NaN != NaN;  //true

// NaN != undefined;  //true

// undefined != null;  //false

// undefined != "Hello";  //true

// undefined != "undefined";  //true
// Logical Operators
// Output of the following line of code.

// 20 > 5 && 5 < 20; //true
// 20 > 5 && 20 < 5;  //false
// NaN && NaN;  // NaN
// NaN && undefined;  //NaN
// undefined && " "; undefined
// "" && "Arya";  //""
// "Arya" && 5;  //5
// 10 && "Arya";  //"arya"
// " " && 10; //10
// NaN && undefined;  //NaN
// " " || 10;  //" "
// undefined || " ";  //" "
// 10 || "Arya";  //10
// "" || "Arya";  // "arya"
// !undefined; //true
// !null;  //true
// !20;  //false
// !0;  //true
// !NaN;  //true