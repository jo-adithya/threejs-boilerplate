import { Mesh } from "three";

export function disposeMesh(mesh: Mesh) {
  mesh.geometry.dispose();

  // Loop through all material properties and dispose all of them
  for (const key in mesh.material) {
    const value: any = mesh.material[key as keyof Mesh["material"]];

    // Test if there is a dispose function
    if (value && typeof value.dispose === "function") {
      value.dispose();
    }
  }
}
