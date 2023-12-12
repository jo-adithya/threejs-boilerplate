import { Resources, ResourceType } from "types";

/**
 * @description List of resources that will be loaded by the `ResourceManager`.
 *
 * @type {Resources}
 */
const resources = {
  sample: [
    {
      name: "sample",
      type: ResourceType.Sample,
      path: "/models/sample.glb",
    },
  ],
} as const;

export type ResourceGroup = keyof typeof resources;
export type ResourceName = (typeof resources)[ResourceGroup][number]["name"];

export default resources;
