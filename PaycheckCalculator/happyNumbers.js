"use strict"; 

function happyNumber(){
	processSequence();

	function processSequence(str){
		let userInputString=document.getElementById("uIString").value;
		let userInputArray=userInputString.split("");
		console.log(userInputArray);
		let happyArray=[];
			for (let i =0; i <userInputArray.length; i ++) {
			happyArray.push(Math.pow(userInputArray[i],2));
		}
	function addElement(num){
		return num + [num +1];
	}
return happyArray
	if (happyString === 1){
		document.getElementById("resultHappyNumber").innerHTML = ("Yes");	}
	else{
		document.getElementById("resultHappyNumber").innerHTML = ("No");	}
}
}