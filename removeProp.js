//Given an object and a key, "removeProperty" removes the given key from the given object
var obj = {
	"mykey": "value"
}

function removeProperty(obj, key) {
	///Your code Starts here 
	
	
  delete obj[key];
	
	
	///Your code Ends here
}

console.log(removeProperty(obj, "mykey"))