import * as THREE from "three";

// enum Projects {
//   threeJsText = ,
// }

interface IProjectsProps {
  scene: THREE.scene;
  threeJsProject: String;
}

import getThreeText from "./threeJsText";

/**
 *
 * @param THREE.scene The threejs scene to be rendered at
 * @param String The threejs project to render
 */
export default function getThreeProject(
  scene: THREE.scene,
  projectName: string
) {
  if (projectName === "threeJsText") getThreeText(scene, THREE);
}
