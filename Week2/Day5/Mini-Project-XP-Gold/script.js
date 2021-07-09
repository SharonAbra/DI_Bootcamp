let number1="";
let number2="";
let opp="";
let equ=0;

function number(num) {
if(opp===""){
number1=number1+num;
  document.getElementById('num1').innerHTML=number1;
}
else{
number2=number2+num;
document.getElementById('num2').innerHTML=number2;
}
};

function operator(oper) {
	opp=oper;
	document.getElementById('operator').innerHTML=oper;

};

function equal(){
	switch (opp) {
  case '+':
    alert(parseInt(number1)+parseInt(number2));
    break;
      case '-':
    alert(parseInt(number1)-parseInt(number2));
    break;
    case '*':
alert(parseInt(number1)*parseInt(number2));
    break;
    case '/':
alert(parseInt(number1)/parseInt(number2));
    break;
}


};

