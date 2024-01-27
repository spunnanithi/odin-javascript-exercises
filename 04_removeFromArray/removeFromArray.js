const removeFromArray = function (arr, ...args) {
	// For each of the values in the input arr,
	// filter out the values that appear in the input
	// optional arguments
	return arr.filter((ele) => !args.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
