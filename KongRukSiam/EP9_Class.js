//Class

/****************************
แบบ Object แบบ Literal
*****************************/
var user={
    name:"Keng",
    age:34,
    SayHi:function(WordSayHi="Fucking"){
          return `Hello ${WordSayHi} World =>${this.name}`
    }
}

console.log(user.SayHi());

//--------------------------------------------------
/***************************
Class แบบดั้งเดิม 
ประกาศ แบบ แยกกัน
****************************/
function UserClass1(name,age){   // Class Constructor
    this.name=name
    this.age=age
}
UserClass1.prototype.SayHi=function(){ // method
    console.log("Hello = "+this.name + "Age ="+this.age)
}

var user1=new UserClass1("Sahachar",344) // ต้อง new ด้วย
user1.SayHi()
//--------------------------------------------------------------------------------
/***************************
 Class แบบดั้งเดิม 2
 ประกาศแบบ อยู่ใน function ใหญ๋ อีกที
****************************/
var UserClass0 = (function () {  //function ใหญ่
    function UserClass0(name,age){
        this.name=name
        this.age=age
    }

    UserClass0.prototype.SayHi = function(){
        console.log("Hello = "+this.name + "Age ="+this.age);
    }

    return UserClass0; //ต้องมี Return ด้วย ไม่งั้นจะขึ้น UserClass0 is not a constructor  ==> งง?
})();

var user0=new UserClass0("Sahachart By Classic Class",340)
user0.SayHi()

//-----------------------------------------------------------------
/***************************
 * ES6
 * แบบ ทั่วไป เหมือน dot Net 
****************************/
class UserClass2{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    SayHi(){
        console.log(`Hello = ${this.name} Age = ${this.age}`);
    }
}

var user2=new UserClass2("Sahachar By Class",344)
user2.SayHi()
