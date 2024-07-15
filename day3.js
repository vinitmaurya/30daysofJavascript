
function checkIntegerStatus(a){
    if(a == 0){
        console.log("Zero Number");
    }else if(a < 0){
        console.log("Negative Number");
    } else{
        console.log("Positive Number");
    }
}
checkIntegerStatus(-8);
function checkVoterEligibility(age){
    if(age >= 18){
        console.log("Voting Allowed");
    }else{
        console.log("Voting Not Allowed");
    }
}
checkVoterEligibility(23);
function findLargestNumber(a,b,c){
    var largest = 0;
    if(a > b && a > c){
        largest = a;
    }else if(b > a && b > c){
        largest = b;
    }else{
        largest = c;
    }
    console.log(largest);
}
findLargestNumber(48,34,34);
function printDay(day){
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
    }
}
printDay(7);
function printGrade(score){
    switch(true){
        case (score<=100 && score > 90):
            console.log("A");
            break;
        case (score<=90 && score > 80):
            console.log("B");
            break;
        case (score<=80 && score > 70):
            console.log("C");
            break;
        case (score<=70 && score > 60):
            console.log("D");
            break;
        default:
            console.log("F");
            break;
    }
}
printGrade(80)
function checkEvenOrOdd(num){
    num % 2 == 0 ? console.log("Even Number") : console.log("Odd Number");
}
checkEvenOrOdd(30);
function checkLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log("Leap Year");
    }else{
        console.log("Not a Leap Year");
    }
}
checkLeapYear(2020);
checkLeapYear(2023);