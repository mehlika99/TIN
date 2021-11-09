function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades=grades;
  }
Object.defineProperty(Student.prototype, 'FullName', {
    get: function() { return this.firstName + " " + this.lastName ; },
    set: function(name) {
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
        }
});
Object.defineProperty(Student.prototype, 'AvgGrade', {
      get: function () {
            let gradeAvg = 0;
            for (let i = 0; i < this.grades.length; i++) {
                gradeAvg += this.grades[i];
            }
            return gradeAvg / this.grades.length;
        }
});

let student = new Student('MEHLIKA','BILGICLI','S20321',[1,2,3,4]);
console.log(student.FullName);
console.log(student.AvgGrade);