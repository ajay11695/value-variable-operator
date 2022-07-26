// // 1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
// let user =prompt("enter name")
// alert(user)
// // 2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
// let username=user
// console.log(user + "  and  " + username )
// // 3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
// let age=22;   islearning="true"
// let multiplemvariable=age + "*" + islearning
// alert(multiplemvariable)
// // 4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
// // */
// user="john"
// console.log(user + " and  " + username )
// /* 2.
// Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
// */
// let numA=+prompt("enter numA")
// let numB=+prompt("enter numB") 
// let sum=numA+numB
// alert(sum)
// // Loops

// // 3. Complete the following code to make the output be 0 2 4 6 8 10?
// // for(let i=0;i<=10;i=i+2)

// //     console.log(i);
// // }
//  for(let i=0;i<=10;i=i+2) {
//   console.log(i)
//  }



// // 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.
//   for(let i=10;i>=0 ;i--){
//     if(i%2!==0){
//         console.log(i)
//     }
//   }

// // 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)

// let i=5
// let total=0
// while(i>=0){
//   total=total+i
//   console.log(total)
//   i--
// }
// // 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)

// let k=10
//  let Concat=0
// while(k>=0){
//   if(k%2==0){
   
//     Concat=Concat+k
//     console.log(Concat)
      
//   }
//   k--
// }
// Comparisoin

/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.
Example:
21, 21; // true
"hello", -21; // false
*/
let num1=+prompt("enter num1")
let num2=+prompt("enter num2")
console.log(num1,num2)
alert(num1==num2)


// console.log(num2)