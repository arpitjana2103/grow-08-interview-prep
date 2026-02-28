// Count Palindrome in string
// Exp Inp : abba
// Exp Output : [a, b, b, a, bb, abba].length = 6

function pallindromeSubStrCount(str) {
	function expand(left, right) {
		let count = 0;

		while (left >= 0 && right < str.length && str[left] === str[right]) {
			left--;
			right++;
			count++;
		}

		return count;
	}

	let res = 0;

	for (let i = 0; i < str.length; i++) {
		// Count odd pallindromes
		res += expand(i, i);
		// Count even pallindromes
		res += expand(i, i + 1);
	}

	return res;
}

console.log(pallindromeSubStrCount("ababa")); // 9
console.log(pallindromeSubStrCount("abba")); // 6
