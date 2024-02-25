//Given an object and a key, "addProperty" adds a new property on the given object with a value of true


var obj = {}

function addProperty(obj, key) {
	///Your code Starts here 
	
	obj[key]=true;
	
	return true;
	///Your code Ends here
}

console.log(addProperty(obj, "mykey"));