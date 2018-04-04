let hoursWorked= parseFloat(prompt("How many hours did you work?"), 2);
let ratePay= parseFloat(prompt("What is your hourly rate?"), 2);

console.log(hoursWorked);
console.log(ratePay);

if (hoursWorked >= 40) {
ratePay= ratePay*1.5}

let paycheck= (hoursWorked * ratePay);

console.log(paycheck);


window.alert ("$"+ paycheck.toFixed(2));