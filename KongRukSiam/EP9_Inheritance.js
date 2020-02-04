//  Inheritance การสืบทอด class

class Admin{

    constructor(name){
        this.AdminName = name
    }
    GetPermission(){
        console.log("Your Permission Is Admin");
    }
}

class UserClass2 extends Admin{
    constructor(name,age){
        super("Admim"+name)
        this.name=name
        this.age=age
    }
    SayHi(){
        console.log(`Hello = ${this.name} Age = ${this.age}`);
    }
}

var user2=new UserClass2("Sahachar By Class",344)
user2.SayHi()

user2.GetPermission()