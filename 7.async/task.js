class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время')
		}
		const alarm = {
			time,
			callback,
			canCall: true
		}
		this.alarmCollection.push(alarm);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	//Спагетти-код, но мне хотелось разобраться со всеми методами времени пошагово
	getCurrentFormattedTime() {
		let date = new Date();
		let hour = date.getHours();
		let minute = date.getMinutes()
		if (hour < 10) {
			hour = (`0${hour}`)
		}
		if (minute < 10) {
			minute = `0${minute}`
		}
		let actualTime = `${hour}:${minute}`
		return actualTime;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}
		this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
			if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
				alarm.canCall = false;
				alarm.callback()
			}
		}), 1000)
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true)
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}