"use strict"

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		let arr = [];
		return arr;
	} else if (d === 0) {
		let arr = [-b / (2 * a)];
		return arr;
	} else {
		let arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentPerMonth = percent / 12 / 100;
	let principalAmount = amount - contribution;
	let paymentPerMonth = principalAmount * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
	let totalAmount = paymentPerMonth * countMonths;
	return Number(totalAmount.toFixed(2));
}