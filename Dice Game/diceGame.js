"use strict";
let die1Side;
let die2Side;
let dieQuantity;
let userInput;
let travelDieSide=20;
let die1Value;
let die2Value;
let score=0;
let doublesValue;
let distance=0;
let roadLog=0;
let character;
let characterStrength=0;
let attackDie=0;
let characterHealth=0;
let characterSpeed=0;
let enemyHealth=0;
let enemyStrength=0;
let attackDieEnemy=0;

function createCharacter(){
	characterHealth= rollDie(50, "dice-side-1");
	console.log(characterHealth);
	displayValue(characterHealth,"health");
	characterStrength= rollDie(4, "dice-side-2");	
	console.log(characterStrength);
	displayValue(characterStrength,"strength");
	attackDie= rollDie(20, "dice-side-3");
	console.log(attackDie);
	displayValue(attackDie,"attack");
	characterSpeed=rollDie(4, "dice-side-4");
	console.log(characterSpeed);
	displayValue(characterSpeed,"speed");
		}
function createEnemy(){
	enemyHealth= rollDie(20, "dice-side-enemy");
	displayValue(enemyHealth,"healthEnemy");
	enemyStrength= rollDie(3, "dice-side-enemy");	
	displayValue(enemyStrength,"strength");
	attackDieEnemy= rollDie(10, "dice-side-enemy");
	displayValue(attackDieEnemy,"attack");
}

function attack(){
	createEnemy();

}


function playGame(){
	moveLocation(travelDieSide,travelDieSide);
	eventRoll();
	continuePlay();
	alertLocation(distance);
}	

function rollDie(dieSide, id){	
	let dieValue = Math.floor(Math.random()*dieSide+1);
	console.log(dieValue);
	displayDieValue(dieValue, id)
	return dieValue;
}

function displayDieValue(value, result){
	document.getElementById(result).innerHTML = value;
}

function displayValue(value, id){
	document.getElementById(id).innerHTML = value
}
function displayMessage(value, id, message, units){
	document.getElementById(id).innerHTML = message + value + units;
}

function getUserInput(id, result){
	result=document.getElementById(id).value;
	return result;	
}

function doubles(value1, value2){
	let result= 2 * (value1 + value2);
	return result;
}

function diceSum(value1, value2){
	let result= value1 + value2;
	return result;
}

function moveLocation(die1Side, die2Side){
	die1Value=rollDie(die1Side,"dice-side-1");
	die2Value=rollDie(die2Side,"dice-side-2");
	if (die1Value===1 && die2Value===1){
			distance+=0;
		}
	else if (die1Value===die2Value) {
			distance+=doubles(die1Value, die2Value);
			console.log(score);
}
	else {
		distance+=diceSum(die1Value,die2Value)
	}
	displayMessage(distance,"distance", "You have travelled ", " miles");

}
function scorePoints(die1Side, dieSide2){
	die1Value=rollDie(die1Side);
	die2Value=rollDie(die2Side);
	displayDieValue(die1Value,"dice-side-1");
	displayDieValue(die2Value,"dice-side-2");
	if (die1Value===1 && die2Value===1){
			score=0;
		}
	else if (die1Value===die2Value) {
			score=doubles(die1Value, die2Value);
			console.log(score);
}
	else {
		score=diceSum(die1Value,die2Value)
	}
	displayMessage(score,"score", "You have scored ", " points");
}

function continuePlay() {
    let insult;
    if (confirm("Would you like to make your next move?")) {
        nextTurn();
    } else {
        if (confirm("Would you like to start over?")) {
        playgame();
    } 	else {
        	if (confirm("Would you like to make your next move?")) {
        nextTurn();
    } 		else {
        insult = "I didn't want to play with you anyways!";
    }
    }
    }
    document.getElementById("status").innerHTML = insult;
}
function alertLocation(distance, distanceFrom){
	if (distance<10) {
		displayMessage(distanceFrom, "status", "You are ", " miles from New York");

	}
}
function distanceFrom(distance1, distance2){
	distanceFrom=distance - roadLog

}

function eventRoll(){
	let dieValue=rollDie(4,"dice-side-1");
	if (dieValue===1){
		let event= "treasure"
		displayMessage(event, "status", "You found ", ". Lucky You!");
		characterHealth+=treasureRoll("die-side-2");
		characterStrength+=treasureRoll("die-side-3");
		attackDie+=treasureRoll("die-side-4");
	}
	else if (dieValue===2 || dieValue===4){
		let event="attacked";
		displayMessage(event, "status", "You have been ", ". OH NO!");
		attack();
	}
	else if (dieValue===3){
		playGame();
	}

}

function treasureRoll(dieSide){
	let dieValue=rollDie(20, dieSide);
	if (dieValue===1){
		dieValue=0;
		return;
	}
	else if (dieValue===20){
		dieValue+=rollDie(20,dieSide);
		return;
	}
	else{
		return;
	}

}



//create treasure Roll
//create attack roll

//stop loop ever 10 distance for a location
//report location upon arrival reset distance to location total
//trigger event with location arrival
	//events with attacks, zombies, scooby doo and the mystery gang, construction zone, bridge out, flat tire, ford a river, ghosts, Lake Poncatrain swamp people, Rick Rolled Radio station, 
//use dice to create character, car, weapons
//