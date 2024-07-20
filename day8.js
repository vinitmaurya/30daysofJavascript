
const person = {
    name: 'Rob',
    age: 18
}
function print(obj){
    return `Name is ${obj.name} and age is ${obj.age}`;
}
function p(val){
console.log(val);
}
p(print(person));
function multiline(){
    return `There was a time when we needed help and now we don't 
    What should have been a time of sorrow we create a time of joy and 
    anger out of it some crimes did happen but not that bad `
}
p(multiline());

const regarray = [3,4,5,2,1,6,8,7];
const [first,second] = regarray;
p(first)
p(second)

const book = {
    title: 'Band of Shoes',
    author: 'Mond Delores'
}
const {author,title} = book;

p(title)
p(author)

const ngarray = [...regarray,9,11];
p(ngarray);


function getSumofNumbers(...args){
    let sum = 0;
    for(let val of args){
        sum += val;
    }
    return sum;
}

p(getSumofNumbers(...regarray));


function product(a,b=1){
    return a*b;
}
p(product(3,5));
p(product(99))

const designation = 'Amnesologist';
const client = 'BDC Corp';
const hasJob = true;
const position = 23;
const calcExperience = () => position/2;
const personalDetails = { designation , client , hasJob , position, calcExperience };

p(personalDetails)

p(personalDetails.calcExperience());





