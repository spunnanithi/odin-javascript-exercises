// Leap years:
// - divisible by 4
// - divisible by 400

// Non-leap years:
// - divisible by 100 but NOT 400

const leapYears = function (year) {
	if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
		return true;
	}
	return false;
};

// Do not edit below this line
module.exports = leapYears;
