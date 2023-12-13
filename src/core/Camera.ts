import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Experience } from "./Experience";

export class Camera extends THREE.PerspectiveCamera {
  private readonly experience = Experience.getInstance();
  private readonly sizes = this.experience.sizes;
  private readonly canvas = this.experience.canvas;
  controls?: OrbitControls;

  constructor() {
    super();

    this.initializeCamera();
    this.initializeControls();
  }

  private initializeCamera() {
    this.fov = 75;
    this.aspect = this.sizes.width / this.sizes.height;
    this.near = 0.1;
    this.far = 100;
    this.position.set(6, 4, 8);
    this.updateProjectionMatrix();
    this.experience.add(this);
  }

  private initializeControls() {
    this.controls = new OrbitControls(this, this.canvas);
    this.controls.enableDamping = true;
  }

  onWindowResize() {
    this.aspect = this.sizes.width / this.sizes.height;
    this.updateProjectionMatrix();
  }

  update() {
    this.controls?.update();
  }
}
