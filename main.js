function calc() {
    var a = Number(document.querySelector("#value1").value);
    var b = Number(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;


//conditional-statement for validation check

if (a == '' && b == '') {
    return alert('invalid input');
}


//conditional-statement for operations

switch (op) {
   case 'add':
    calculate = a + b;
      break;
   case 'min':
    calculate = a - b;
      break;
   case 'div':
    calculate = a / b;
      break;
   case 'mul':
    calculate = a * b;
      break;  
   case 'expo':
    calculate = a ** b; 
}

alert('Answer is ' + calculate)

}