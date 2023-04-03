// class
class animal{
    cat(){
        console.log("Eating");
    }
    sheep(){
        console.log("gazing");
    }
}

const obj = new animal();
obj.cat();
obj.sheep();

//constructors -- accepts arguments

class student{
    constructor(name,sec,gpa){
        this.name = name;
        this.sec = sec;
        this.gpa = gpa;

    }
    study(){
        console.log('study');
    }
}
const stu1 = new student("pavan","b",8.9);
console.log(stu1.name);
console.log(stu1.sec);
console.log(stu1.gpa);

stu1.study();
const stu2 = new student("mani","a",9.4);
console.log(stu2.name);
console.log(stu2.sec);
console.log(stu2.gpa);




//arrow functions

const sample = ()=> 
    console.log("hello");
    sample();





