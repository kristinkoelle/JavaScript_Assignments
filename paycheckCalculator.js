function runPaycalculator (){
let userInputHours=document.getElementById("hours").value;
let userInputRate= document.getElementById("payrate").value;
let standardHours= 40;
let overtimeMult=1.5;
if (userInputHours > standardHours) {
	
	let overtime = userInputHours - standardHours ;
	
	console.log(overtime);
	
	let overtimePay = userInputRate* overtimeMult;
	
	let overtimeGross = overtime * overtimePay;
	
	let normalPay= userInputRate * standardHours;
	
	console.log(overtimePay);
	
	grossPay = overtimeGross + normalPay;
	
	console.log(grossPay);
	
	document.getElementById("paytotal").innerHTML = ("Your pay will be $") + grossPay.toFixed(2);
	
}

else { 
	grossPay= userInputRate * userInputHours;
	
	console.log(grossPay);
	
	document.getElementById("paytotal").innerHTML = ("Your pay will be $") + grossPay.toFixed(2);
	
}
}

/**
function overtimeExists (boolean) {
	if (userInputHours>standardHours){
	function runOvertimeCalculator();
	
}

function calcOvertimeRate { 
	let overtimeRate = userInputRate * overtimeMult;
}

function runOvertimeHours (hoursWorked, standardHours) {
	let overtimeHours= userInputHours - standardHours;
}

function runOvertimePay {
	let overtimePay= overtimeRate * overtimeHours;
}



function runOvertimeCalculator {
	let grossPay= overtimePay + standardPay;
}



function runPaycalculator {
		if (overtimeExists) {
			runOvertimeCalculator();
		}
		else (

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
} */

//Refactor your pay calculator to use functions and take user input from the webpage. ​

//User input will be hours worked and hourly rate