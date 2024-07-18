const arr = [1,2,3,4,5];
const narr = new Array(3,5,4,6,5);

function p(val){
    console.log(val);
}

p(arr);
p(narr);

p(narr.at(0));
p(narr.at(-1));
p(narr[0]);
p(narr[narr.length-1]);

p(narr.push(34));
p(narr);
p(narr.push(88));
p(narr);
p(narr.pop());
p(narr);
p(narr.shift());
p(narr.shift());
p(narr);
p(narr.unshift(7));
p(narr.unshift(9));
p(narr);


let darr = arr.map((a)=>a*a);
p(darr);
p(darr.filter(val=>val%2==0));
let red = arr.reduce((prev,next)=>prev +=next);
p(red);


for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach((val,ind,ard)=>{
    p(`index: ${ind}, value: ${val},original array: ${ard}`);
})


const twoD = new Array(new Array(3,4,3),new Array(7,8,6),new Array(3,1));
p(twoD);
p(twoD[1][2]);