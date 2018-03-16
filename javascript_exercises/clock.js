class Clock {
  constructor() {
    // 1. Create a Date object.
    const currentDate = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = currentDate.getHours();
    this.minutes = currentDate.getMinutes();
    this.seconds = currentDate.getSeconds();
    // 3. Call printTime.

    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // Format the time in HH:MM:SS
    let currentTime = `${addSecond(this.hours)}
    :${addSecond(this.minutes)}:${addSecond(this.seconds)}`;
    // Use console.log to print it.
    function addSecond(time) {
      if (time < 10) {
        return `0 + ${time}`;
      } else {
        return `${time}`;
      }
    }
    console.log(currentTime);
  }

  _tick() {
    this.seconds += 1;
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
