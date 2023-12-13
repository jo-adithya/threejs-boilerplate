import { Experience } from "Experience";

import { Environment } from "./Environment";
import { CustomMesh } from "@app/interfaces";

export class World {
  private readonly experience = Experience.getInstance();
  private readonly resourceManager = this.experience.resourceManager;
  private readonly meshes: CustomMesh[] = [];

  constructor() {
    // Check if all resources are loaded
    if (this.resourceManager.ready) {
      this.setupWorld();
    } else {
      this.resourceManager.once("ready", this.setupWorld.bind(this));
    }
  }

  setupWorld() {
    new Environment();
    const meshes: CustomMesh[] = [];
    this.meshes.push(...meshes);
  }

  update() {
    this.meshes.forEach((mesh) => mesh.update());
  }
}
