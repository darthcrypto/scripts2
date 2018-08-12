var johnHeight = 6;
var markHeight = 7;
var allyHeight = 8;


var johnAge = 30;
var markAge = 35;
var allyAge = 40;

var johnScore = johnHeight + johnAge * 5  //156
var markScore = markHeight + markAge * 5  //182
var allyScore = allyHeight + allyAge * 5

if (johnScore === markScore === allyScore) {
	console.log("We have a 3 way tie")
} else if (allyScore > johnScore && allyScore > markScore) {
	console.log("Ally is the winner")
} else if (johnScore > allyScore && johnScore > markScore) {
        console.log("John is the winner")
} else if (markScore > johnScore && markScore > allyScore) {
        console.log("Mark is the winner")	
}
