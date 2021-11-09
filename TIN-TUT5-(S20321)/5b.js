function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades=grades;
    
       this.studentAverageAndInfo = function()
    {
        let gradeAvg = 0;
        for(i = 0; i < this.grades.length; i++)
        {
            gradeAvg += this.grades[i];
        }

       return this.firstName + ' ' + this.lastName + ' '  + ': ' + gradeAvg/grades.length;
    }
  }
  let student = new Student('Mehlika', 'Bilgicli', '20321', [1, 2, 3, 4]);
console.log(student.studentAverageAndInfo());
