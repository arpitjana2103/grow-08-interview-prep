// Remove Duplicate Characters from a String
// Hello World --> Helo Wrd

function removeDuplicate(str) {
	const st = new Set();
	let res = "";

	for (const char of str) {
		if (!st.has(char)) res = res.concat(char);
		st.add(char);
	}

	return res;
}

console.log(removeDuplicate("Hello World"));
