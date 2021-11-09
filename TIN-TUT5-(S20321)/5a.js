var employee ={//object initializer
             name : "MAX", 
             surname : "GELLER" ,
             employedYear : 2006,
             
              workForYears: function(){
                  return new Date().getFullYear()-this.employedYear;
          
    },
             thankYou : function(){
                console.log("Thank You For Working With Us!");
             } 

            };

function employeeInformation(object){  
    for (const emp in object) {
        console.log(emp+":"+object[emp]+"\ntype:"+typeof object[emp] + "\n");
    }
    
}  

employee.thankYou();

//employeeInformation(employee);  
//console.log(employee.workForYears());

