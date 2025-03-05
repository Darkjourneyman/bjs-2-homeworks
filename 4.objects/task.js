function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.hasOwnProperty("marks")) {
		this.marks.push(...marksToAdd);
	};

}

Student.prototype.getAverage = function() {
	if (!this.hasOwnProperty("marks") || !Array.isArray(this.marks)) {
		return 0;
	} else if (this.marks.length === 0) {
		return 0;
	}
	return (this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}
