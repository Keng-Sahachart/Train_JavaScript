//Arrow Function 
// ลดรูป การเขียน function


console.log("Hello");

//แบบเดิม
console.log("แบบเดิม");
function F0(a,b,c){
    return a+b+c
}
console.log(F0(1,2,3));

//--------------------------------------------------------------
// แบบใหม่ 
console.log("แบบใหม่");
 arwF1=(a,b,c)=>{return a+b+c};
console.log(arwF1(5,10,20));

// แบบ statement เดียว return แบบ ไม่มีต้องพิมพ์ return ก็ได้
const arwF2=(a,b,c)=>a+b+c;
console.log(arwF2(50,100,20));
console.log(arwF2(50,100,20));

// แบบ statement เดียว return แบบ ไม่มีต้องพิมพ์ return // เป็น Object
let arwF3=(a,b,c)=>({Name:a,Age:b,Money:c}); // ต้องมี วงเล็บครอบ {} อีกที ไม่งั้นคิดว่า {} เป็น ขอบเขต
console.log(arwF3("Keng",34,10));




