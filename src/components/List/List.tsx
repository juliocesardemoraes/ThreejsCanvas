import "./index.css";
import * as THREE from "three";

interface IPropsList {
  scene: THREE.Scene;
}

import Button from "../Button/Button";
export default function List({ scene }: IPropsList) {
  return (
    <>
      <div className="main__container__cards">
        <h1 className="listTitle">Choose a project below</h1>
        <Button
          img=""
          imgTitle=""
          title="Amazing 3d text render with threejs"
          label="3D Text"
          scene={scene}
        ></Button>
        <Button
          img=""
          imgTitle=""
          title="Amazing 3d text render with threejs"
          label="3D Text"
          scene={scene}
        ></Button>
      </div>
    </>
  );
}
