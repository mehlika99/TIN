const student = {
    firstName: "",
    lastName: "",
    id: "",
    courses: ['GRK','TPO','SKJ','UTP'],
  };
  
  function createStudent(firstName, lastName,id) {
    let newstudent = Object.create(student);
    newstudent.firstName = firstName;
    newstudent.lastName = lastName;
    newstudent.id = id;
  
    return newstudent;
  }
  
  console.log(createStudent('MEHLIKA','BILGICLI','S20321'));
   console.log('courses -----> '+createStudent('MEHLIKA','BILGICLI','S20321').courses);