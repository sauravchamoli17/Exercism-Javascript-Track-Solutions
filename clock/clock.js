class Clock {
  constructor(hour = 0, min = 0) {
    const hoursToMs = (60*60*1000);
    const minsToMs = (60 * 1000);
    this.time = new window.Date(hour * hoursToMs + min * minsToMs);
  }

  toString() {
    return `${this.time.getUTCHours().toString().padStart(2,"0")}:${this.time.getUTCMinutes().toString().padStart(2,"0")}`;
  }

  plus() {
    
  }

  minus() {

  }

  equals() {
    
  }
}