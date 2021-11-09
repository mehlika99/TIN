class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + " " + this.lastName ;
    }
    set fullName(name){
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

class Student extends Person{ 
    constructor(firstName, lastName, id, grades){
        super(firstName,lastName);
        this.id = id;
        this.grades=grades;
    }

    get avgGrade(){
        let gradeAvg = 0;
        for (let i = 0; i < this.grades.length; i++) {
            gradeAvg += this.grades[i];
        }
        return gradeAvg / this.grades.length;
    }
}
let student = new Student('MEHLIKA','BILGICLI','S20321',[1,2,3,4]);
console.log(student.fullName);
console.log(student.avgGrade);
