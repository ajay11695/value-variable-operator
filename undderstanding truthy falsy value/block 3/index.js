// Using alert, prompt, confirm and console

/*
1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.
*/

let num1 = 21;
let num2 = 32;

/*
- Create a variable named `language` and store the value of `JavaScript` in it
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/
let language="javascript"
alert("I am learning " +language)
alert("the value of num1 is " + num1 + " and the value of num2 is " + num2)
alert(`the sum of of ${num1} and ${num2} is ${num1+num2}`)
/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`
  - Using prompt accept the name of the user and store it a variable names `userName`
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
  - Using confirm check if user is adult or not and store the value in `isAdult`
  - Alert message `I am [userName] a [userProfession]`
  - Log the message `I am [userName] a [userProfession]`
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/
let username=prompt("name of the user")
let userProfession=prompt("profession of the user")
let isAdult=confirm("user is adult or not")
alert(`i am ${username} a ${userProfession}`)
console.log(`i am ${username} a ${userProfession}`)
alert(`username:${username}`)
alert(`adult:${isAdult}`)
alert(`profession: ${userProfession}`)
console.log(`username:${username}`)
console.log(`adult:${isAdult}`)
console.log(`profession: ${userProfession}`)


/*
. Addition using prompt
  - Accept two number values form user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/
let numA,numB=

numA=+prompt("accept value1")
numB=+prompt("accept value2")
alert(numA+numB)
alert(numA-numB)
alert(numA*numB)
console.log(numA-numB)
console.log(numA*numB)


















