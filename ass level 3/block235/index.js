// 🎖 Write a program to calculate the total price of your phone purchase. With these conditions
//  * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
//  * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
//  * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
//  * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
// */

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// // your code goes here
while(amount<bank_balance){
    
    amount+=PHONE_PRICE
    if(amount<SPENDING_THRESHOLD){
        amount+=ACCESSORY_PRICE
    }
    // console.log(amount)
}
let textamout=amount+(amount*TAX_RATE)
console.log(textamout)
if(textamout<bank_balance){
    console.log("you can afford")
}else{
    console.log("you can not afford")
}

// // ⛑ Answer of the above will `$334.76`.

// Logical AND operation
// true && true; //true
// true && false;  //false
// false && true;  //false
// false && false; //false
// "foo" && "bar";  //"bar"
// "bar" && "foo";  //:"foo"
// "foo" && "";  //""
// "" && "foo";  //""
// " " && "John" && "" && false;  //""
// false && "Hey" && undefined;  //false
// "undefined" && false && 42;  //false

// Logical OR operation
// true || true; //true
// true || false;  //true
// false || true;  //true
// false || false;  //false
// "foo" || "bar";  //"foo"
// "bar" || "foo"; //"bar"
// "foo" || "";  //"foo"
// "" || "foo"; //"foo"
// " " || "John" || "" || false;  //" "
// false || "Hey" || undefined;  //"hey"
// "undefined" || false || 42;  //undefined
// Write the output of the code next to each line:
// let a = 5,
//   b = 10;
// (a != b) && (a < b); // true

// (a > b) || (a == b);  //false

// (a < b) || (a == b);  //true

// !(a < b);  //false

// !(a > b);  //true

// !!a;  //true

// !!(a>b);  //true


// Expression and Statement
// Write expression and statement next to each line of code:

// 21 // expression
// 100 + 200 + 79884 + 900  // expression
// 200 ** 2  // expression
// !21 // expression
// var num = 21;// expression
// if(true){}  //statement
// true ? true : false;  // expression
// for(let i = 0; i < 10; i++){}  //statement
// while(true){} // don't try it in the browser it's an infinite loop  //statement
// let user = "Arya"; // expression
// 12 % 5  // expression
// a = 10;  // expression
// Write valid and invalid with reason next to each line of code given below:

// let age = 21;  //VALID
// let number = 21 + 21 + 100 + 200 + 900;  //valid
// let num = var number;  //invalid
// let user = "Arya" + "Stark";  //valid
// let isAdult = if(10 > 5){};  invalid
// let isAdult = 10 > 5 ? true : false; //valid
// let forLoop = for(let i = 0; i < 10; i++){};  //invalid
//  let message = alert("Hello World");  //valid
// +10;  //valid
// var age = 21;  //valid
// var   //valid
// age valid
// =  //valid
// 21; valid




let age ="jay"
console.log(typeof age)