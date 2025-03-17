function parseCount(entity) {
	let toFigure = Number.parseFloat(entity);
	if (isNaN(toFigure)) {
		throw new Error('Невалидное значение');
	}
	return toFigure;

}



function validateCount(toParse) {
	try {
		return parseCount(toParse)
	} catch (error) {
		return error
	}
}

class Triangle {
	constructor(firstSide, secondSide, thirdSide) {
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thirdSide = thirdSide;
		if (firstSide + secondSide < thirdSide || secondSide + thirdSide < firstSide || firstSide + thirdSide < secondSide) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}

	get perimeter() {
		return this.firstSide + this.secondSide + this.thirdSide;
	}
	get area() {
		let p = this.perimeter / 2
		let triangleArea = Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)).toFixed(3);
		let areaDecimal = Number.parseFloat(triangleArea);
		return areaDecimal;
	}
}

function getTriangle(firstSide, secondSide, thirdSide) {
	try {
		return new Triangle(firstSide, secondSide, thirdSide);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
		};
	}
}