//Given an object and a key, "getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return null.

var obj = {
	mykey: 'value'
}

function getProperty(obj, key) {
	///Your code Starts here 
	
if(obj && key in obj){
    return obj.mykey;
}
else{
    return undefined;
}
	///Your code Ends here
}
console.log(obj,'mykey');
console.log(obj,'dummykey');