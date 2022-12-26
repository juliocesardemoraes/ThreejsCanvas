import * as THREE from "three";

// IMPORTING PROJECTS
import getThreeText from "./projects/threeJsText";

type ProjectName = "threeJsText" | "threeJsGame";

/**
 *
 * @param THREE.scene The threejs scene to be rendered at
 * @param String The threejs project to render
 */
export default function getThreeProject(
  scene: THREE.Scene,
  projectName: ProjectName
) {
  if (projectName === "threeJsText") getThreeText(scene, THREE);
}
