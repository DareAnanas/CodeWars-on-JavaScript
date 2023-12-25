class Counter {
    chimes = 0;
    n;
    time;
    constructor(initialTime, expectedChimes) {
        let [hours, minutes] = initialTime.split(':');
        minutes = parseInt(minutes);
        hours = parseInt(hours);
        if (minutes == 0)
            this.chimes += hours;
        if (minutes == 15 || minutes == 30 || minutes == 45)
            this.chimes += 1;
        this.n = expectedChimes;
        this.time = hours * 100 + minutes;
    }

    increase() {
        let minutes = this.time % 100;
        if (minutes == 45) {
            this.time += 55;
            if (this.time / 100 == 13)
                this.time = 100;
            this.chimes += this.time / 100;
            return;
        }   
        if (minutes == 0 || minutes == 15 || minutes == 30) {
            this.time += 15;
            this.chimes++;
            return;
        }
        if (minutes < 15) {
            this.time += 15 - minutes;
            this.chimes++;
            return;
        }
        if (minutes < 30) {
            this.time += 30 - minutes;
            this.chimes++;
            return;
        }
        if (minutes < 45) {
            this.time += 45 - minutes;
            this.chimes++;
            return;
        }
        if (minutes < 100) {
            this.time += 100 - minutes;
            if (this.time / 100 == 13)
                this.time = 100;
            this.chimes += this.time / 100;
            return;
        }
    }

    checkChimes() {
        if (this.chimes >= this.n)
            return true;
    }

    getTimeString() {
        let timeString = this.time.toString();
        if (timeString.length == 3)
            timeString = '0' + timeString;
        timeString = timeString.slice(0,2) + ':' + timeString.slice(2);
        return timeString;
    }
}


function cuckooClock(inputTime, expectedChimes) {
    let counter = new Counter(inputTime, expectedChimes);
    while (true) {
        if (counter.checkChimes()) {
            return counter.getTimeString();
        }
        counter.increase();
    }
}

console.log(cuckooClock("01:00", 1));
console.log(cuckooClock("07:22", 1));
console.log(cuckooClock("12:22", 2));
console.log(cuckooClock("01:30", 2));
console.log(cuckooClock("04:01", 2));