// ShortHand Property & Method

//แบบเดิม 

//ถ้าต้องการ ชื่อ Property และ ที่เหมือนกันกับ ชื่อ ตัวแปร ก็ถ่ายค่าให้แบบ ปกติ
//ไม่สนใจชื่อตัวแปร จะ ถ่ายค่าให้เท่านั้น
let first="Saha"
let last="Pan"
let nick="KEng"

let user={  
    first:first,  // ถ่ายค่าตัวแปร ให้ Property ที่ชื่อเหมือนตัวแปร
    last:last,
    nick:nick
}
console.log(user);

//แบบใหม่
// เรียกชื่อตัวแปร ที่จะถ่ายค่าให้ ได้เลย 
// จะถ่ายค่า ทั้งชื่อ ทั้ง value ให้ทันที
let userA={  
    first,  
    last,
    nick
}

console.log(userA);

// แบบทำ function
function User(first,last,age){
    return {
        first,
        last,
        age
    }
}
console.log(User("SahaCh","Panlaw","34"));

arwUser=(first,last,age)=>({first,last,age})
console.log(arwUser("Sah","Panl","340"));
