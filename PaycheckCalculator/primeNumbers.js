"use strict"; 


function primeNumber(){
	let userInputString=document.getElementById("uIString").value;
	testPrime(userInputString);
	console.log(testPrime(userInputString));
}
function testPrime(i){
	if (i===1){
		return false;
	}
	else if (i===2) {
		return true;
	}
	else 
	{
		for (let j =2; j<i; j++) {
			if (i % j ===0){
				console.log(i%j);
				document.getElementById("resultPrimeNumber").innerHTML = ("This is not a prime number.");
				return false;
			}
		}
	document.getElementById("resultPrimeNumber").innerHTML = ("This is a prime number.");
	return true;
	}
}
