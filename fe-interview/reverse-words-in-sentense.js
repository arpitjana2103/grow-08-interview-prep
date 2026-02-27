// Reverse Words in Sentense
// Exp Inp : I Love JSCafe
// Exp OutP : JsCafe Love I
// TC : O(N)
// SC : O(N)

function revSentense(str) {
	return str.split(" ").reverse().join(" ");
}

console.log(revSentense("I Love JSCafe"));
