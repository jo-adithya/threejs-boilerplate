import { Experience } from "Experience";
import "./style.css";

const canvas = document.querySelector("canvas#webgl") as HTMLCanvasElement;
const experience = Experience.getInstance(canvas);

bindEventListeners();
window.requestAnimationFrame(render);

function bindEventListeners() {
  window.addEventListener("resize", () => {
    experience.onWindowResize();
  });
}

function render() {
  experience.update();
  window.requestAnimationFrame(render);
}
