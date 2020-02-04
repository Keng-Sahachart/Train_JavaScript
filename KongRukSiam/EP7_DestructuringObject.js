//Destructuring Object
// การถ่ายทอด ค่าใน Object ให้ ตัวแปร แบบ สั้นๆ

// แบบเดิม
var person={
    Name:"Keng",
    Skill:"Java HTML CSS JS"
}

// ก็ไม่ยาวเท่าไหร่
var name = person.Name
var Skill = person.Skill
console.log(`Name:${name} , Skill:${Skill}`);


// แบบใหม่ แบบ สั้นๆ
var Player={
    PName:"Sahachart",
    PSkill:"JS Node React",
    Power:500
}

var {Power,PSkill,PName}=Player // สั้นลง /แต่ ชื่อตัวแปร ต้องเหมือน ชื่อฟิลด์  / สลับตำแหน่งกันได้

console.log(`Name: ${PName} , Skill: ${PSkill} , Power:${Power}`);


