import * as THREE from "three";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

import getThreeText from "./threejsprojects/threeJsText";
import React, { useRef, useEffect } from "react";

//import * as dat from "lil-gui";
//const gui = new dat.GUI();

const canvasSetup = (canvasReference: HTMLCanvasElement) => {
  const scene = new THREE.Scene();

  const canvas = canvasReference;

  const sizes = {
    width: canvas.clientWidth,
    height: canvas.clientHeight,
  };

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth / 2;
    sizes.height = window.innerHeight / 2;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  getThreeText(scene, THREE);

  // CAMERA

  const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.01,
    100
  );

  camera.position.set(0, 0, 3);
  scene.add(camera);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  // RENDERER

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // GAMELOOP
  const gameLoop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(gameLoop);
  };

  const render3dCanvas = () => {
    console.log("AQ");
  };

  gameLoop();
};

export default function CanvasThreeJs() {
  const canvasReference = React.createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (canvasReference.current) canvasSetup(canvasReference.current);
  }, [canvasReference]);

  //canvasSetup(canvaReference);
  return (
    <>
      <canvas className="webgl" ref={canvasReference}></canvas>
    </>
  );
}
