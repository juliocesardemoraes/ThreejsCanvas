import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/fontloader";

const randomNum = () => {
  return (Math.random() - 0.5) * 10;
};

export default function getThreeText(scene, THREE) {
  console.time("donuts");
  const textureLoader = new THREE.TextureLoader();
  const matcapTexture = textureLoader.load("matcap/8.png");

  const fontLoader = new FontLoader();
  const meshcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture,
  });

  fontLoader.load("fonts/outfitTR.json", (fontDisplay) => {
    const textGeometry = new TextGeometry("Júlio Moraes\nWeb Developer", {
      font: fontDisplay,
      size: 0.3,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelOffset: 0,
      bevelSegments: 4,
    });

    const text = new THREE.Mesh(textGeometry, meshcapMaterial);
    text.position.x -= 1.15;
    text.position.y -= 0.1;
    text.name = "3dRenderedName";
    scene.add(text);
  });

  const donut = new THREE.TorusBufferGeometry(0.3, 0.2, 20, 45);

  for (let i = 0; i < 100; i++) {
    const donutMesh = new THREE.Mesh(donut, meshcapMaterial);
    donutMesh.position.set(randomNum(), randomNum(), randomNum());
    donutMesh.rotation.set(randomNum(), randomNum(), randomNum());

    const randomNumber = Math.random();
    donutMesh.scale.set(randomNumber, randomNumber, randomNumber);
    scene.add(donutMesh);
  }
  console.timeEnd("donuts");
}
