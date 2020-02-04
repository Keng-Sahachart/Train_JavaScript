let fs = require('fs');
fs.writeFileSync('What01.txt','What The Fuck, What The Duck, Hello Fucking Worldxxxx');

let s = fs.readFileSync('What01.txt','utf8');
console.log(s);

console.log("xyz");

console.log(123);

if (1==1) {
    console.log(123);
} else {
    console.log(321);
}

console.log(name(5,101));

const fn2 = (a,b) => {
    return a*b
}
console.log(fn2(10,5));
console.log(FuncA(5,10));

for (let run1 = 1 ; run1 < 10 ; run1+=1) {
    console.log(run1);

}
function name(a,b) {
    return a+b
}


function FuncA(a,b) {
    return a+b

}