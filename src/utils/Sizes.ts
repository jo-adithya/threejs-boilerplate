export class Sizes {
  width!: number;
  height!: number;
  pixelRatio!: number;

  constructor() {
    this.onWindowResize();
  }

  onWindowResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
}
