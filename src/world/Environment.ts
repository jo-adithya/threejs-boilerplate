import * as THREE from "three";
import { Experience } from "Experience";

export class Environment {
  private readonly experience = Experience.getInstance();
  private readonly debug = this.experience.debug;
  private sunLight!: THREE.DirectionalLight;

  constructor() {
    this.setSunLight();
    this.debugSetup();
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 1);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 15;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(3, 3, -2.25);
    this.experience.add(this.sunLight);
  }

  debugSetup() {
    if (!this.debug.active) return;

    const debugFolder = this.debug.gui?.addFolder("environment");

    // Sun Light
    debugFolder?.add(this.sunLight, "intensity", 0, 10, 0.01).name("Sunlight Intensity");
    debugFolder?.add(this.sunLight.position, "x", -5, 5, 0.01).name("Sunlight posX");
    debugFolder?.add(this.sunLight.position, "y", -5, 5, 0.01).name("Sunlight posY");
    debugFolder?.add(this.sunLight.position, "z", -5, 5, 0.01).name("Sunlight posZ");
  }
}
