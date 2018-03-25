//Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

/*
// Lecture: variables 2
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;
console.log (name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


age = 'thirty six';
job = 'driver';

console.log (name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


var lastName = prompt('What is the last name?');
console.log(lastName);


alert(name + ' is a ' + age + ' years old ' + job + '. Is he ma    rried? ' + isMarried + '.');
*/





//Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
	console.log(name + ' is married!');
} else {
	console.log(name + ' will hopefully marry soon :)')
}

isMarried = true;

/*
if (isMarried) {
	console.log('YES!');
} else {
	console.log('NO!');
}

if(isMarried) {
	console.log('YES!');
}


if (23 === "23") {
	console.log('Something to print....');
}
*/


/////////////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
	console.log('John is a teenager')
} else if (age > 20 && age < 30) {
	console.log('John is a young man.')
} else {
	console.log('John is a man.')
}

var job = 'teacher';

job = prompt('what does John do?');

switch (job) {
	case 'teacher':
		console.log('John teaches kids');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon');
		break;
	case 'cop':
		console.log('John helps fight crime');
		break;
	default:
		console.log('John does something else.');
}
*/


/////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
        return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement >= 0) {
	console.log(name + ' retires in ' + retirement + ' years.');
        }
        else {
	console.log(name + ' has already retired.')
 	}
}

yearsUntilRetirement('John', 1998);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

/////////////////////////////
// Lecture: statements and expressions
/*
function someFun(par) {
	//code
}

var someFun = function(par) {
	//code
}


//expressions produce value
3 + 4;
var x = 3;

//statement just performs an action
if (x ===5) {
	//do something
}
*/


//////////////////////////////
//Lecture: arrays
/*
var names = ['John','Jane','Mark'];

var years = new Array(1990,1969,1948);


console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');   //adds to the end
john.unshift('Mr.'); //adds to the beginning
john.pop();          //removes from the end
john.shift();        //removes from the beginning 

console.log(john);

// alert(john.indexOf('Smith'));


//indexOf method will return -1 if the string is not in the array
if (john.indexOf('teacher') === -1) {
	console.log('John is NOT a teacher.');
}
*/




//////////////////////////////
// Lecture: Objects and Properties

var array = [1,2,3];
array[0];

///////in arrays order matters
///////in objects, order does not matter, it's key:value pairs

// this is the john object
var john = {
	name: 'John',
	last: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.last);
console.log(john['last']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

//create empty Jane Object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);























































































































