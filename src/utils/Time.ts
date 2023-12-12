export class Time {
  start: number;
  current: number;
  delta: number;
  elapsed: number;

  constructor() {
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;
  }

  update() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;
  }
}
