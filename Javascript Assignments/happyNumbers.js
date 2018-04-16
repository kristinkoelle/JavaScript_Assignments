"use strict"; 

function happyNumber(){
	let userInputString=document.getElementById("uIString").value;
	let userInputArray=userInputString.split("");
	console.log(userInputArray);
	let happyArray=[];
	for (let i =0; i <userInputArray.length; i ++){
	processSequence(userInputArray);

	function processSequence(str){
		
		for (let i =0; i <userInputArray.length; i ++) {
			happyArray.push(Math.pow(userInputArray[i],2));
			console.log(happyArray);
		}
		
		let tempArray= happyArray[0];
		let tempArray2=happyArray[1];
		userInputArray=tempArray + tempArray2;
	}
}
}
