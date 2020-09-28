    var Stepcount = 0;


function countSteps(Givennumber) {
    if (Givennumber !== 0) {
      if (Givennumber % 2 === 0) {
          newNumber = Givennumber / 2;
        Stepcount= Stepcount + 1;
          countSteps(newNumber)
      } else {
          newNumber = Givennumber - 1;
         Stepcount= Stepcount + 1;
          countSteps(newNumber)
      }
    } 
    return Stepcount; 
}



var p = countSteps(14);
console.log(p);

