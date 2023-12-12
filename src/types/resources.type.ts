import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

import { ResourceName, ResourceGroup } from "@app/data/resources.ts";

export enum ResourceType {
  CubeTexture,
  Texture,
  GLTF,
  Sample,
}

export type Resource = Readonly<{
  [group in ResourceGroup]:
    | {
        name: ResourceName;
        type: ResourceType.CubeTexture;
        path: string[];
      }[]
    | {
        name: ResourceName;
        type: ResourceType.GLTF | ResourceType.Texture;
        path: string;
      }[];
}>;

export type Resources = Record<string, Resource[]>;

export type ResourceFileType = THREE.Texture | THREE.CubeTexture | GLTF;

export interface EnvironmentMap {
  intensity: number;
  texture: THREE.Texture;
  updateMaterials: () => void;
}

export interface TextureProps {
  color?: THREE.Texture;
  alpha?: THREE.Texture;
  ambientOcclusion?: THREE.Texture;
  height?: THREE.Texture;
  normal?: THREE.Texture;
  metalness?: THREE.Texture;
  roughness?: THREE.Texture;
}

export interface AnimationProps<T extends string> {
  mixer?: THREE.AnimationMixer;
  actions?: {
    [name in T]: THREE.AnimationAction;
  };
  current?: THREE.AnimationAction;
}
