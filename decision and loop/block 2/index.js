// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:
  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number=+prompt("enter a number")
if(number%2==0){
    alert("number is even")
}else{
    alert("number is odd")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=+prompt("enter num1")
let num2=+prompt("enter num2")
if(num1>num2){
    alert(`${num1} is max value`)
}else{
    alert(num2 +" is max value")
}



// 3. Convert the above code using`?` terniary operator
// let num1=number(prompt("enter num1"))
// let num2=+prompt("enter num2")
(num1>num2)?alert(`${num1} is max value`):alert(num2 +" is max value");

/*
4. Write a program that asks the user for the house name and check the following conditions:
  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let housename=prompt("houlse name")
// let houseName=prompt("housename")
if(housename==="stark"){
    alert("winter is coming")
}else if(housename==="lannister"){
    alert("a lannister always pays his debt")
}else{
    alert("all men must die")
}
// 5. Convert the above code using`?` terniary operator
// let housename=prompt("houlse name")
// let houseName=prompt("housename")
(housename==="stark")?alert("winter is coming"): (housename==="lannister")?alert("a lannister always pays his debt"):alert("all men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let numofMonth = Number(prompt(`please enter the number of the month`));
let numofMonth =+prompt("please enter the number of the month") ;
switch(numofMonth){
    case 1:
        alert("january")
        break;
        case 2:
            alert("february")
            break;
            case 3:
                alert("march")
                break;
            case 4:
                alert("april")
                break;
            case 5:
                alert("may")
                break;
            case 6:
                alert("june")
                break;
            case 7:
                alert("july")
                break;
            case 8:
                alert("august")
                break;
            case 9:
                alert("september")
                break;
            case 10:
                alert("octomber")
                break;
            case 11:
                alert("november")
                break;
            case 12:
                alert("december")
                break;
                default:
                    alert("none of these")

}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/
let salary=+prompt("salary of user")
if(salary<= 20000){
    alert(`${(salary*10)/100}`)
}else if(salary<=40000){
    alert(`${(salary*20)/100}`)
}else if(salary>50000){
    alert(`${(salary*30)/100}`)
}else{
    alert("no tax")
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.
  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`
*/
let marks=+prompt("enter marks")

    if(marks>100 ){
        alert("marks can not be grater than 100")
    }else if(marks>80 && marks<100){
        alert("grade A")
    }else if(marks>50 && marks< 80){
alert("grade B")
    }else if (marks>30 && marks<50){
        alert("grade C")
    }else if ("marks >0"){
        alert("grade D")
    }else{
        alert(" none of these")
    }

switch(marks){
    case (marks>100):
        alert("marks can not greater than 100")
        break;
        case (marks>80&& marks <100):
            alert("grade A")
            break;
            case (marks>50 && marks <80):
                alert("grade B")
                break;
                case (marks>30 && marks<50):
                    alert("grade C")
                    break;
                    case (marks>0):
                        alert("grade D")
                        break;
                        default:
                            alert("none of these")
}

//if..else

//USinng switch case///

/* 9. Weather app
  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
 let weather=prompt("weather by usaer")
 switch(weather){
    case "sunny":
        alert("wear a t-shirt")
        break;
        case "rainy":
            alert("don't forget to take your raincoat")
            break;
            case "hot":
                alert("get a hanky")
                break;
                case "freezing":
                
                
                    alert("get your sweeter on")
                    break;
                    default:
                        alert("not a valid input")
            
 }
