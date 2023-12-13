import { EventEmitter } from "events";

export class Sizes extends EventEmitter {
  width!: number;
  height!: number;
  pixelRatio!: number;

  constructor() {
    super();

    this.onWindowResize();
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  private onWindowResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.emit("resize");
  }
}
