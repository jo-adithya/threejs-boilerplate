import * as THREE from "three";

import { Experience } from "@app/core";

export abstract class CustomMesh extends THREE.Mesh {
  protected experience = Experience.getInstance();

  constructor() {
    super();

    this.setGeometry();
    this.setMaterial();
    this.setMesh();

    this.experience.add(this);
  }

  abstract setGeometry(): void;
  abstract setMaterial(): void;
  setMesh() {}

  update() {}
}
