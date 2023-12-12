import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

import { EventEmitter } from "events";

import { ResourceName } from "@app/data/resources";
import resources, { ResourceGroup } from "@app/data/resources";

import { ResourceType, ResourceFileType } from "types";

export class ResourceManager extends EventEmitter {
  resources: {
    [group in ResourceGroup]?: { [name in ResourceName]?: ResourceFileType };
  } = {};
  ready = false;
  private toLoad = 0;
  private loaded = 0;
  private gltfLoader?: GLTFLoader;
  private textureLoader?: THREE.TextureLoader;
  private cubeTextureLoader?: THREE.CubeTextureLoader;

  constructor() {
    super();

    // If there are no resources, we're ready
    if (Object.keys(resources).length === 0) {
      this.ready = true;
      this.emit("ready");
    }

    this.setLoaders();
    this.loadResources();
  }

  private setLoaders() {
    this.gltfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.cubeTextureLoader = new THREE.CubeTextureLoader();
  }

  loadResources() {
    for (const group of Object.keys(resources)) {
      this.toLoad += resources[group as ResourceGroup]?.length;
    }
    this.loaded = 0;

    for (const group of Object.keys(resources)) {
      for (const resource of resources[group as ResourceGroup]) {
        this.loadResource(group as ResourceGroup, resource.name, resource.type, resource.path);
      }
    }
  }

  loadResource(
    group: ResourceGroup,
    name: ResourceName,
    type: ResourceType,
    path: string | string[]
  ) {
    switch (type) {
      case ResourceType.GLTF:
        this.gltfLoader?.load(path as string, (gltf) => {
          this.onLoad(group as ResourceGroup, name, gltf);
        });
        break;

      case ResourceType.Texture:
        this.textureLoader?.load(path as string, (texture) => {
          this.onLoad(group as ResourceGroup, name, texture);
        });
        break;

      case ResourceType.CubeTexture:
        this.cubeTextureLoader?.load(path as string[], (texture) => {
          this.onLoad(group as ResourceGroup, name, texture);
        });
        break;
      
      case ResourceType.Sample:
        this.onLoad(group as ResourceGroup, name, null as any);
    }
  }

  onLoad(group: ResourceGroup, name: ResourceName, file: GLTF | THREE.Texture) {
    if (!this.resources[group]) this.resources[group] = {};
    this.resources[group]![name] = file;
    this.loaded++;

    if (this.loaded !== this.toLoad) return;
    this.emit("ready");
    this.ready = true;
  }
}
