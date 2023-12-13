import { Experience } from "./core";
import "./style.css";

const canvas = document.querySelector("canvas#webgl") as HTMLCanvasElement;
Experience.getInstance(canvas);
