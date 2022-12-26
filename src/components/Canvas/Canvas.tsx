import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import React, { useEffect } from "react";
import * as THREE from "three";
import "./index.css";

interface ICanvasProps {
  canvasReference: React.RefObject<HTMLCanvasElement>;
  scene: THREE.Scene;
}

/**
 * Setup for the threejs canvas
 * @param {HTMLCanvasElement} canvasReference Canvas reference for rendering threejs elements
 * @param {THREE.Scene} scene Scene created for handling threejs interactions
 */
const canvasSetup = (
  canvasReference: HTMLCanvasElement,
  scene: THREE.Scene
) => {
  const canvas = canvasReference;

  canvas.addEventListener("dblclick", () => {
    if (!document.fullscreenElement) {
      canvas.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

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

  gameLoop();
};

export default function CanvasThreeJs(props: ICanvasProps) {
  const { canvasReference, scene } = props;

  useEffect(() => {
    if (canvasReference.current) canvasSetup(canvasReference.current, scene);
  }, [canvasReference]);

  return (
    <>
      <canvas className="webgl" ref={canvasReference}></canvas>
    </>
  );
}
