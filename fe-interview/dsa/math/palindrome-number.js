// Q1 : Palindrome Number
// An integer is a palindrom when it reads the same froward and backword
//
// Input : x = 121 Output : true
// Input : x = 101 Output : true
// Input : x = 114 Output : false

function isPalindrome(num) {
	let cNum = num;
	let digitCount = 0;

	while (cNum > 0) {
		cNum = Math.trunc(cNum / 10);
		digitCount++;
	}

	while (digitCount > 0) {
		// 1. left digit
		const lDigit = Math.trunc(num / Math.pow(10, digitCount - 1)) % 10;

		// 3. Reduce digitCount
		digitCount--;

		if (digitCount > 0) {
			// 4. right digit
			const rDigit = num % 10;

			// 5. Remove right digit
			num = Math.trunc(num / 10);

			// 6. Reduce digitCount
			digitCount--;

			console.log("lDigit : ", lDigit, ", rDigit : ", rDigit);
			if (rDigit !== lDigit) return false;
		}
	}

	return true;
}

// console.log(isPalindrome(123456));
console.log(isPalindrome(110511));
console.log(isPalindrome(110511));
