function eveNoddNo(num = 23){
    if(num%2 == 0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}
eveNoddNo();

function calcSq(num = 4){
    return num*num;
}
console.log(calcSq());

const max = function (a,b){
    if(a<b) return b;
    else return a;
};
console.log(max(8,3));

const concat = function (a,b) {return a + b};
console.log(concat('Hello ',' Dosto'));

const result = (a=3,b=4) => a+b; 
console.log(result());

const multi = function (a,b=33){
    return a*b;
}
console.log(multi(3,5));
console.log(multi(4));

const greet = (name,age=18)=>{return `Hi ${name}, your age is ${age}`};
console.log(greet('Rajesh'));
console.log(greet('Xavior',44));

function calling(fn,times){
    while(times!=0){
        console.log(fn());
        times--;
    }
}
function fact() {
    return "This is a fact";
}
calling(fact,3);

function call3(f1,f2,value){
    const fac = f1(value);
    return f2(fac);
}
function fac1(value){
 return value*value;
}
function fac2(value){
 return value-20;
}
console.log(call3(fac1,fac2,8));