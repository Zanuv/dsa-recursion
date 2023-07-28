/** product: calculate the product of an array of numbers. */
function product(nums) {
	// base case: if the array is empty, return 1
	if (nums.length === 0) return 1;
	// recursive case: multiply the first number by the product of the rest of the array
	return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
	// base case: if the array contains only one word, return its length
	if (words.length === 1) return words[0].length;
	// recursive case: compare the length of the first word with the length of the longest word in the rest of the array
	const restLongest = longest(words.slice(1));
	return Math.max(words[0].length, restLongest);
}

/** everyOther: return a string with every other letter. */
function everyOther(str, i = 0) {
	// base case: if we have reached the end of the string, return an empty string
	if (i >= str.length) return "";
	// recursive case: concatenate the current character with every other character from the rest of the string
	return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
	// base case: if the string is empty or contains only one character, it is a palindrome
	if (str.length <= 1) return true;
	// recursive case: if the first and last characters of the string are the same, check if the substring that excludes the first and last characters is a palindrome
	if (str[0] !== str[str.length - 1]) return false;
	return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, i = 0) {
	// base case: if we have searched all elements and haven't found val, return -1
	if (i >= arr.length) return -1;
	// recursive case: if the current element is val, return the current index. Otherwise, search in the rest of the array
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
	// base case: if the string is empty, return an empty string
	if (str === "") return "";
	// recursive case: concatenate the reverse of the substring that excludes the first character with the first character
	return revString(str.substr(1)) + str.charAt(0);
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
	let arr = [];
	for (let key in obj) {
		// if the value is a string, add it to the array
		if (typeof obj[key] === "string") {
			arr.push(obj[key]);
		}
		// if the value is an object, concatenate the array with the result of the recursive call
		else if (typeof obj[key] === "object") {
			arr = arr.concat(gatherStrings(obj[key]));
		}
	}
	return arr;
}

/** binarySearch: given a sorted array of numbers, and a value, return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, low = 0, high = arr.length - 1) {
	// base case: if low > high, val is not in the array, return -1
	if (low > high) return -1;
	let mid = Math.floor((low + high) / 2);
	// if the middle element is val, return its index
	if (arr[mid] === val) return mid;
	// recursive case: if the middle element is greater than val, search in the left half. Otherwise, search in the right half.
	if (arr[mid] > val) return binarySearch(arr, val, low, mid - 1);
	return binarySearch(arr, val, mid + 1, high);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
