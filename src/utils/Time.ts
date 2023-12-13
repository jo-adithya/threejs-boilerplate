import { EventEmitter } from "events";

export class Time extends EventEmitter {
  start: number;
  current: number;
  delta: number;
  elapsed: number;

  constructor() {
    super();

    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;

    window.requestAnimationFrame(this.update.bind(this));
  }

  private update() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.emit("tick");
    window.requestAnimationFrame(this.update.bind(this));
  }
}
