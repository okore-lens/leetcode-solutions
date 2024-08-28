function convert(s: string, numRows: number): string {
	if (numRows === 1) return s;
	const array = new Array(numRows).fill("");
	let currRow = 0;
	let isIncrement = true;
	for (let i = 0; i < s.length; i++) {
		if (currRow === numRows - 1) isIncrement = false;
		if (currRow === 0) isIncrement = true;
		array[currRow] = array[currRow] + s[i];
		if (isIncrement) currRow++;
		else currRow--;
	}
	return array.join("");
}
const convertedString = convert("PAYPALISHIRING", 3);

console.log(convertedString);
