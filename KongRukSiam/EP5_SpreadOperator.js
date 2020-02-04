// Spread Operator
// การถ่ายทอด สมาชิก Array ให้ Array ตัวใหม่

// แบบ Array
let Pd1 = [ProductCode="001",Name="Car"]
console.log(Pd1);

let Pd2 = [... Pd1,Price=100] // ถ่ายทอด สมาชิก
console.log(Pd2);

//--------------------------------------------------------------------------
// แบบ Object
let Pd3={ProductCode:"001",Name:"Car"}
 console.log(Pd3);

 let Pd4={... Pd3,Price:100}  // ถ่ายทอด สมาชิก
 console.log(Pd4);

 let Pd5={... Pd3,Price:500}   // Update Field
 console.log(Pd5);
