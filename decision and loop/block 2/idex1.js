let housename=prompt("houlse name")
// let houseName=prompt("housename")
if(housename=="stark"){
    alert("winter is coming")
}else if(housename=="lannister"){
    alert("a lannister always pays his debt")
}else{
    alert("all men must die")
}
// 5. Convert the above code using`?` terniary operator
// let housename=prompt("houlse name")
// let houseName=prompt("housename")
(housename=="stark")?alert("winter is coming"): (housename=="lannister")?alert("a lannister always pays his debt"):alert("all men must die");





let marks=+prompt("inter marks")

switch(false){
    case (marks>100):
        alert("marks can not greater than 100")
        // break;
        
        case (marks>80&& marks <100):
            alert("grade A")
            // break;
            case (marks>50 && marks <80):
                alert("grade B")
                // break;
                case (marks>30 && marks<50):
                    alert("grade C")
                    // break;
                    case (marks>0):
                        alert("grade D")
                        // break;
                        default:
                            alert("none of these")
}