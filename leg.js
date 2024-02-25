//MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//turkey = 2 legs
//horse = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals

function CountLegs(turkey, horse, pigs) {
	///Your code Starts here 
	turkey=turkey*2;
	horse=horse*4;
	pigs=pigs*4;
	const animalTotal=turkey+horse+pigs;
	return animalTotal;
	
	
	
	///Your code Ends here
}
console.log(CountLegs(2,3,5));
console.log(CountLegs(1,2,3));
console.log(CountLegs(5,2,8));
