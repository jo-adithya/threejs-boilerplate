import * as THREE from "three";
import { Experience } from "./Experience";

export class Renderer extends THREE.WebGLRenderer {
  private readonly experience = Experience.getInstance();
  private readonly sizes = this.experience.sizes;
  private readonly camera = this.experience.camera;

  constructor(canvas: HTMLCanvasElement) {
    super({ canvas, antialias: true });
    this.initializeRenderer();
  }

  private initializeRenderer() {
    this.toneMapping = THREE.CineonToneMapping;
    this.toneMappingExposure = 1;
    this.shadowMap.enabled = true;
    this.shadowMap.type = THREE.PCFSoftShadowMap;
    this.setClearColor("#000000");
    this.onWindowResize();
  }

  onWindowResize() {
    this.setSize(this.sizes.width, this.sizes.height);
    this.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }

  update() {
    this.render(this.experience, this.camera);
  }
}
