// add, subtract, multiply, divide, remainder of two numbers and log to console
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function remainder(a, b) {
  return a % b;
}
function callFnandLog(a, b, fn) {
  console.log(fn(a, b));
}
callFnandLog(14, 38, add);
callFnandLog(14, 38, subtract);
callFnandLog(14, 38, multiply);
callFnandLog(14, 38, divide);
callFnandLog(14, 38, remainder);

// use += , -=  and log to console previous and after values
function increment(a, b) {
  b++;
  return (a += b);
}
function decrement(a, b) {
  a++;
  return (a -= b);
}
callFnandLog(33, 98, increment);
callFnandLog(25, 34, decrement);
// use <,>,>=,<=,==,===
function isLess(a, b) {
  if (a < b) {
    return true;
  }
  return false;
}
function isGreater(a, b) {
    if(a > b){
        return true;
    }
    return false;
}
function isGreaterorEqual(a, b) {
    if(a >= b){
        return true;
    }
    return false;
}
function isLessorEqual(a, b) {
    if(a <= b){
        return true;
    }
    return false;
}
function isEqual(a, b) {
    if(a == b){
        return true;
    }
    return false;
}
function isExactlyEqual(a, b) {
    if(a === b){
        return true;
    }
    return false;
}
callFnandLog(33, 98, isLess);
callFnandLog(25, 34, isEqual);
callFnandLog(33, 98, isLessorEqual);
callFnandLog(25, 34, isGreaterorEqual);
callFnandLog(33, 98, isEqual);
callFnandLog(25, 34, isExactlyEqual);
// use && , || , !
function andCheck(a,b) {
    if(a > b){
        return true;
    }
    return false;
}
function orCheck(a,b) {
    if(a > b){
        return true;
    }
    return false;
}
function notCheck(a,b) {
    if(a > b){
        return true;
    }
    return false;
} 
callFnandLog(33, 98, andCheck);
callFnandLog(25, 34, orCheck);
callFnandLog(33, 98, notCheck);
// use ternairy operations
function getLargest(a,b) {
    return a > b? a : b;
}

callFnandLog(25, 34, getLargest);
