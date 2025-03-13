class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(condition) {
		if (condition < 0) {
			this._state = 0;
		} else if (condition >= 100) {
			this._state = 100;
		} else {
			this._state = condition;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book"
		this.author = author;

	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}



class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const foundBookIndex = this.books.findIndex(book => book.name === bookName);
		if (foundBookIndex === -1) {
			return null;
		}

		const [book] = this.books.splice(foundBookIndex, 1);
		return book;

	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}
	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		} else if (!this.marks[subject]) {
			this.marks[subject] = []
		}
		this.marks[subject].push(mark)
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}
		return this.marks[subject].reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.marks[subject].length;
	}
	getAverage() {
		let allSubjects = Object.keys(this.marks)
		let allSubjectsAverage = allSubjects.reduce((accumulator, currentValue) => accumulator + this.getAverageBySubject(currentValue), 0);
		return allSubjectsAverage / allSubjects.length;
	}

}