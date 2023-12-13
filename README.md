# Three.js Boilerplate

This is a boilerplate for `three.js` app using Vanilla JavaScript with Vite bundler and TypeScript. 


### Important things to note:

- Experience (three.js scene) class in `/src/main/Experience.ts` is a Singleton (Single source of truth).

- `/src/data/resources.ts` to list all resources (textures, models, e.t.c.) that needs to be loaded
  > There's a sample on how to add new resources, also the props are documented in `/src/types/resources.type.ts`


### How to create a new custom mesh

1. Inside the `/src/world` directory, create a new class that extends `CustomMesh` in `/src/interfaces/CustomMesh.interface.ts`.

2. Implement `setGeometry()` and `setMaterial()` method in the new class. (required)

3. Implement `update()` if you want to animate the custom mesh.

4. Implement `setMesh()` if you want to change the mesh properties e.g. position, rotation, e.t.c.

5. Add the newly implemented custom mesh to the `meshes` property inside the `World` class.


## Installation and Usage

```bash
pnpm install
pnpm dev
```


## Languages and Tools:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
</a> 
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
</a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg" alt="three.js" width="40" height="40" />
</a>


## Credits

Awesome Three.js Journey Course by Bruno Simon – https://threejs-journey.com


## License

[MIT](https://choosealicense.com/licenses/mit/)

