function addRow()
{

      var fname = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
      var money = document.getElementById('money').value;
      
      //getting teh table
      var table = document.getElementsByTagName('table')[0];
      
      if(isNaN(money) || money < 100 || money > 1000){
        alert("Input not valid please enter amount between 100-1000 ");
      }else{
    
      //adding empty new the row
      var newRow = table.insertRow(table.rows.length/2+1);
      
      //adding cells to the row
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      
      //adding values to the cells
      cel1.innerHTML = fname;
      cel2.innerHTML = lname;
      cel3.innerHTML = money;

      }
      
}
