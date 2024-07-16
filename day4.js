function printNumbersFrom1to10(num=10){
    for(var i=1;i<=num;i++){
        console.log(i);
    }
}
printNumbersFrom1to10();
function printMultiplicationTable(num=5){
    for(var i=1;i<=10;i++){
        console.log(num+" * "+i+" = " + num*i);
    }
}
printMultiplicationTable();
function calculateSumofNumbers(num=10){
    var sum = 0;
    while(num!=0){
        sum += num;
        num--;
    }
    console.log(sum);
}
calculateSumofNumbers();
function printNumbersFrom1to10W(num=10){
    var a=0;
    while(a<num){
        a++;
        console.log(a)
    }
}
printNumbersFrom1to10W();
function printNumbersFrom1to5(num = 1){
    do{
        console.log(num);
        num++;
    }while(num<=5)
}
printNumbersFrom1to5();
function calculateFactorial(num = 8){
    var fact = 1;
    var numb = 1;
    do{
        fact *= numb;
        numb++;
    }while(numb<=num);
    console.log(fact);
}
calculateFactorial();
function printPattern(){
    for(var i=1;i<=5;i++){
        var str = '';
        for(var j=0;j<i;j++){
            str += "* ";
        }
        console.log(str);
    }
}
printPattern();
function printNumbersFrom1to10C(num = 10){
    for(var i=1;i<=num;i++){
        if(i==5) continue;
        console.log(i);
    }
}
printNumbersFrom1to10C();
function printNumbersFrom1to10B(num=10){
    for(var i=1;i<=num;i++){
        console.log(i);
        if(i==7) break;
    }
}
printNumbersFrom1to10B();