function getFullName(firstName, lastName) {
	///Your code Starts here 
	if(fullName = firstName +" " + lastName){
        return fullName;
    }
	else if(firstName){
        return firstName;

    }
	 else{
        return fullName;
     }
	
	
	
	
	///Your code Ends here
}
console.log(getFullName("GUVI","GEEK"));
console.log(getFullName("GUVI"));         // Output: 'GUVI'
console.log(getFullName("GEEK"));         // Output: 'GEEK'
console.log(getFullName("", "")); 