import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/fontloader";

export default function getThreeText(scene, THREE) {
  const fontLoader = new FontLoader();

  fontLoader.load("fonts/outfitTR.json", (fontDisplay) => {
    const textGeometry = new TextGeometry("Júlio Moraes", {
      font: fontDisplay,
      size: 0.3,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelOffset: 0,
      bevelSegments: 4,
    });
    const textMaterial = new THREE.MeshBasicMaterial();
    const text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.x -= 1.15;
    text.name = "3dRenderedName";
    scene.add(text);
  });
}
