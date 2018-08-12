/*
//part 1
years = [1985, 1990, 1995, 2000, 2005];

//part 2

emptyarray = []

presentyear = 2018

//part 3
for (i = 0; i < 5; i++) {
	age = 2018 - years[i];
	emptyarray[i] = age;
}

console.log(emptyarray)



//part 4

for (i = 0; i < 5; i++) {
	if (emptyarray[i] >= 18) {
		console.log("This person's age is " + emptyarray[i] + ". They are old enough to drink.");
      }	else {
		console.log("This person's age is " + emptyarray[i] + ". They need to fuck off.");
      }
}

*/
//part 5

function printFullAge() {

	presentyear = 2018

	var args = [];

	for (var i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	var emptyarray = []

	for (var i = 0; i < args.length; i++) {
		age = presentyear - args[i]
		if (age >= 18) {
		    emptyarray[i] = true
		}
		else {
		    emptyarray[i] = false
		}
	}
		
	console.log(emptyarray);
}

printFullAge(2016, 1992)
//
//
/*
	age1 = presentyear - yearborn1
        age2 = presentyear - yearborn2
       /*
	if (age1 >= 18) {

		console.log("true");
   	}
	else {
		console.log("false");
	}
}


printFullAge(1987);
*/




