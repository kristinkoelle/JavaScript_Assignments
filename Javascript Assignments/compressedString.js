"use strict"; 

//convert string to array
//create loop comparing and counting array

function runStringCompress(){
	let userInputString=document.getElementById("uIString").value;
	let userInputArray=userInputString.split("");
	console.log(userInputArray);
	let finalArray=[];
	finalArray=doStringCompression(userInputArray);
	let finalString=finalArray.join("");
	console.log(finalString);
	document.getElementById("compressedString").innerHTML = finalString;
}


function doStringCompression(array) {
	let len=array.length;
	let count=0;
	let finalArray=[];
	for (let i=0; i< len; i++) {
		if (array[i] ===array[i+1]) {
			count++;
			console.log(count);
		}
		else {
			count++;
			finalArray.push(count + array[i]);
			count=0;
			}
		}
		return finalArray;
	}
