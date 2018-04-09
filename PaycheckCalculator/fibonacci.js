"use strict"; 


function fibonacciNumber(val){
	let userInputString=document.getElementById("uIString").value;
	testFibonacci(userInputString);
	console.log(testFibonacci(userInputString));
}
function testFibonacci(num){
	let temp=1;
	let a=0;
	let b=1;
	for (let i=2; i <=num; i++) {
		temp=a+b;
		a=b;
		b=temp;		
	}
	window.onload=fibonacciNumber();
	return temp;
}
