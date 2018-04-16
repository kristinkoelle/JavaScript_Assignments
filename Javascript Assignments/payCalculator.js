function runPaycalculator (){
	let userInputHours=document.getElementById("hours").value;
	// validate user input 
	/*
	do { 
	let userInputHours=document.getElementById("hours").value;
	userInputHours=Number(userInputHours)
	}
	}
	while(isNaN(userInputHours)){
		//Alert Message 
	
	}*/
	let userInputRate= document.getElementById("payrate").value;
	// validate user input
	let standardHours= 40;
	let overtimeMult=1.5;
if (userInputHours > standardHours) {
	
	calculateOThours(userInputHours, standardHours);
	
	console.log(overtime);
	
	calculateOTpay (userInputRate, overtimeMult);
	
	calculateOTgross(overtime, overtimePay);
	
	calculateNormalPay(userInputRate, standardHours);
	
	calculateGrossPay(overtimeGross, normalPay);
	
	console.log(grossPay);
	
	document.getElementById("paytotal").innerHTML = ("Your pay will be $") + grossPay.toFixed(2);
	
	return;
}

else { 
	calculateNormalPay(userInputRate, standardHours);

	console.log(normalPay);
	
	document.getElementById("paytotal").innerHTML = ("Your pay will be $") + normalPay.toFixed(2);
	
	return;
	
}
return;
}
function calculateOThours(hours, standard){
	return overtime = hours - standard ;

}
function calculateOTpay(rate, multi) {
	return overtimePay = rate* multi;
}
function calculateOTgross(OThours, OTrate) {
	return overtimeGross = OThours * OTrate;
}
function calculateNormalPay(rate, hours) {
	return normalPay= rate * hours;
}
function calculateGrossPay(overtimeGross, hourlyGross) {
	return grossPay = overtimeGross + hourlyGross;
}