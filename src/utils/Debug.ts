import GUI from "lil-gui";

export class Debug {
  readonly active: boolean;
  gui?: GUI;

  constructor() {
    this.active = window.location.hash === "#debug";
    if (this.active) this.gui = new GUI();
  }
}
