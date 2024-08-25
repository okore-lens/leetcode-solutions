function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

	const mergedArrLength = mergedArray.length;

	const numberofPairs = Math.floor(mergedArrLength / 2);

	const modulusofPairs = mergedArrLength % 2;

	if (modulusofPairs) {
		return mergedArray[numberofPairs];
	}

	return (mergedArray[numberofPairs - 1] + mergedArray[numberofPairs]) / 2;
}

const median = findMedianSortedArrays([1, 3], [2]);

console.log(median);
