//Rest Operator ...
// คือ parameter ที่ ประกาศตัวแปรครั้งเดียว แต่สามารถรับค่า หลายครั้ง ได้ (แล้วเป็น Array)  

//--------------------------------------------------------------------------------------
const addUser = (name,lastname,... city) => {
    return name + ' / ' + lastname + ' / ' + city;
}

console.log(addUser("Sahachart","Panlawan","Buriram"));
console.log(addUser("Keng","XerXis","BKK","BR","SMPK"));

//-------------------------------------------------------------------------------------- 
const addMessage = (first,... messageInput) => {
    return messageInput.map(msg=>first+" "+messageInput) // map จะ return ออกมาตาม จำนวน Array
}

console.log(addMessage("Hello","World"));
console.log(addMessage("Hello","Fucking","World"));

//-------------------------------------------------------------------------------------- 
const addNumber = (... NumberX) =>{
    return NumberX.reduce((Sum,NumberY)=>Sum + NumberY)  // Arrow 1 statement ไม่ต้องมี return
}

console.log(addNumber(1,2,3,4,5,6,7,8,9,10));
console.log(addNumber(10,40,30,20));
