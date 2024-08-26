// function longestPalindrome(s: string): string {
// 	let palindromeString = "";

// 	if (s.length === 1) {
// 		return s;
// 	}

// 	for (let i = 0; i < s.length; i++) {
// 		for (let j = i; j < s.length + 1; j++) {
// 			if (
// 				s.substring(i, j) ===
// 				s.substring(i, j).split("").reverse().join("")
// 			) {
// 				palindromeString =
// 					s.substring(i, j).length > palindromeString.length
// 						? s.substring(i, j)
// 						: palindromeString;
// 			}
// 		}
// 	}

// 	return palindromeString;
// }

function longestPalindrome(s: string): string {
	let longestPalindrome = s[0];

	// looping through all the characters
	for (let i = 0; i < s.length; i++) {
		let currentPalindrome = "";

		let right = 1; //2
		while (s[i] === s[i + right]) {
			currentPalindrome = s.substring(i, i + right + 1);
			right += 1;
		}

		let left = 1; // 2

		while (
			i - left >= 0 &&
			i + right < s.length &&
			s[i - left] === s[i + right]
		) {
			currentPalindrome = s.substring(i - left, i + right + 1);
			left++;
			right++;
		}
		if (currentPalindrome.length > longestPalindrome.length) {
			longestPalindrome = currentPalindrome;
		}
	}

	return longestPalindrome;
}

const palindrome = longestPalindrome("ababab");

console.log(palindrome); // Output: "aba"
