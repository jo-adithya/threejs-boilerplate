import * as THREE from "three";

import { Sizes, Time, ResourceManager, Debug } from "@app/utils";
import { World } from "@app/world/World";

import { Camera } from "./Camera";
import { Renderer } from "./Renderer";

export class Experience extends THREE.Scene {
  private static instance: Experience;

  // Main
  readonly camera: Camera;
  readonly renderer: Renderer;

  // Utils
  readonly debug = new Debug();
  readonly sizes = new Sizes();
  readonly time = new Time();
  readonly resourceManager = new ResourceManager();

  // Addons
  readonly axesHelper: THREE.AxesHelper;

  readonly world: World;

  private constructor(readonly canvas: HTMLCanvasElement) {
    super();
    Experience.instance = this;

    // Global access
    window.experience = this;

    // Main
    this.camera = new Camera();
    this.renderer = new Renderer(canvas);

    // Axes Helper
    this.axesHelper = new THREE.AxesHelper(1);
    this.add(this.axesHelper);

    // World
    this.world = new World();
  }

  public static getInstance(canvas?: HTMLCanvasElement) {
    if (!Experience.instance) {
      if (!canvas) throw new Error("canvas is required!");
      new Experience(canvas);
    }
    return Experience.instance;
  }

  onWindowResize() {
    this.sizes.onWindowResize();
    this.camera.onWindowResize();
    this.renderer.onWindowResize();
  }

  update() {
    this.time.update();
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
