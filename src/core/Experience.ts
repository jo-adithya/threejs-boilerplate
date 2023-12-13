import * as THREE from "three";

import { disposeMesh } from "@app/helpers";
import { Sizes, Time, ResourceManager, Debug } from "@app/utils";
import { World } from "@app/world";

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

  readonly world: World;

  private constructor(readonly canvas: HTMLCanvasElement) {
    super();
    Experience.instance = this;
    window.experience = this; // For debugging purposes

    this.camera = new Camera();
    this.renderer = new Renderer(canvas);
    this.world = new World();
    this.add(new THREE.AxesHelper(5)); // For debugging purposes

    this.bindEventListeners();
  }

  public static getInstance(canvas?: HTMLCanvasElement) {
    if (!Experience.instance) {
      if (!canvas) throw new Error("canvas is required!");
      new Experience(canvas);
    }
    return Experience.instance;
  }

  private bindEventListeners() {
    this.sizes.on("resize", () => this.onWindowResize());
    this.time.on("tick", () => this.update());
  }

  private onWindowResize() {
    this.camera.onWindowResize();
    this.renderer.onWindowResize();
  }

  private update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }

  destroy() {
    // Remove listerners
    this.sizes.off("resize", () => this.onWindowResize());
    this.time.off("tick", () => this.update());

    this.camera.controls?.dispose();
    this.renderer.dispose();

    this.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      disposeMesh(child);
    });

    if (!this.debug.active) return;
    this.debug.gui?.destroy();
  }
}
