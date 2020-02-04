// Computed Property Name
// ชื่อ Property ที่เปลียนแปลง หรือ คำนวนได้  โดยครอบ Property ด้วย []


//ปกติ ไม่มี [ ]

let food1={
    name:"ส้ม",
    Price:100
}
let food2={
    "name":"ผลไม้",
    "Price":200
}

console.log(food1);
console.log(food2);

//----------------------------------------------------------
//ปกติ ใช้ [ ]  ครอบ ชื่อฟิลด์ จะต้องเป็น ตัวแปร หรือ สตริง

let PropName="Cake"

let Num=1

let foodA1={
    [PropName]:" ส้ม",
    ["Price"+Num]:100 // *ข้อสังเกตุ ชื่อฟิลด์ ถ้าไม่ใช่ตัวแปร จะต้อง เป็น String
}
console.log(foodA1);
let {Cake,Price1}=foodA1
console.log(Cake + "/" + Price1);

PropName = "Fruit"  // ทำการเปลี่ยนชื่อ Property Name
Num++ // ให้ชื่อ Property Name ไม่ให้ซ้ำกัน


let foodA2={
    [PropName]:"ส้ม",
    ["Price"+Num]:200
}
console.log(foodA2);

let {Fruit,Price2}=foodA2
console.log(Fruit + "/" + Price2);

