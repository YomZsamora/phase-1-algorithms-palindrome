function isPalindrome(word) {
	//------------------------------------------------------------------------------
	// ALGORITHM
	//------------------------------------------------------------------------------
	// Reverse the word
	// Compare the word and the reversed one
	const reversedWord = word.split('').reverse().join('');
	if(word == reversedWord) {
		return true
	} else {
		return false
	}
}

//------------------------------------------------------------------------------
// PSEUDOCODE
//------------------------------------------------------------------------------
// Split string into array of characters using split()
// Reverse the array values using reverse()
// Convert array back to string using join()
// Compare string to the reversed string
//		if string is the same as reverse string:
//			return true
//		else:
//			return false

//------------------------------------------------------------------------------
// EXPLANATION OF THE SOLUTION
//------------------------------------------------------------------------------

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));
	
	console.log("");
	
	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
