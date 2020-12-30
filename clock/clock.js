const hoursToMs = 60 * 60 * 1000;
const minutesToMs = 60 * 1000;

export class Clock {
  constructor(hours = 0, minutes = 0) {
    const ms = hours * hoursToMs + minutes * minutesToMs;
    this.time = new Date(ms);
  }

  toString() {
    return `${this.time
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:${this.time
      .getUTCMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  plus(minutes) {
    const ms = minutes * minutesToMs;
    this.time = new Date(this.time.getTime() + ms);
    return this;
  }

  minus(minutes) {
    const ms = minutes * minutesToMs;
    this.time = new Date(this.time.getTime() - ms);
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}