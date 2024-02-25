//Create a function that returns the number of frames shown in a given number of minutes fora certain FPS.

function frames(num1, num2) {
	///Your code Starts here 
	const noOfFrames=num1*num2*60;
	return noOfFrames;

	///Your code Ends here
}
console.log(frames(1,1));
console.log(frames(10,1));
console.log(frames(10,25));