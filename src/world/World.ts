import { Experience } from "Experience";

import { Environment } from "./Environment";

export class World {
  private readonly experience = Experience.getInstance();
  private readonly resourceManager = this.experience.resourceManager;

  constructor() {
    if (this.resourceManager.ready) {
      this.setupWorld();
    } else {
      this.resourceManager.once("ready", this.setupWorld.bind(this));
    }
  }

  setupWorld() {
    new Environment();
  }

  update() {
    // Update all objects in the world
  }
}
