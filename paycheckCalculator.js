
let hoursWorked= parseFloat(prompt("How many hours did you work?"), 2);
let ratePay= parseFloat(prompt("What is your hourly rate?"), 2);

console.log(hoursWorked);
console.log(ratePay);
let overtime;
let overtimePay;
let grossPay;


if (hoursWorked > 40) {
	
	let overtime = hoursWorked - 40;
	
	console.log(overtime);
	
	let overtimePay = ratePay * 1.5;
	
	let overtimeGross = overtime * overtimePay;
	
	let normalPay= ratePay * 40;
	
	console.log(overtimePay);
	
	grossPay = overtimeGross + normalPay;
	
	console.log(grossPay);
	
	window.alert("$" + grossPay.toFixed(2));
}

else { 
	grossPay= ratePay * hoursWorked;
	
	console.log(grossPay);
	window.alert("$" + grossPay.toFixed(2));
}

//Refactor your pay calculator to use functions and take user input from the webpage. ​

//User input will be hours worked and hourly rate