
function calc(operand1, operand2, operator) {
    let answer;
    
        if(check==true)
        {
            if(operator= "+")
            {
               answer= operand1+ operand2;
            }
            if(operator= "-")
            {
               answer= operand1- operand2;
            }
            if(operator= "*")
            {
               answer= operand1* operand2;
            }
            if(operator= "/")
            {
               answer= operand1/ operand2;
            }
        
       
    }
    alert(answer);
}
function check(operand1, operand2) {
  if(operand1!= null && operand2!= null)
  {
    return true;
  }
  if(operand1> 0 && operand2> 0)
  {
    return true;
  }
  return false;
}
 calc(3,4 , "+");


