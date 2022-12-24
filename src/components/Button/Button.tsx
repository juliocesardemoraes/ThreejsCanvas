import { useEffect, useState } from "react";
import "./index.css";
import * as THREE from "three";
import getThreeProject from "../Projects/threejsprojects/getThreeProject";
import { atom, useAtom } from "jotai";

interface IButtonParams {
  img: string;
  imgTitle: string;
  title: string;
  label: string;
  scene: THREE.Scene;
}

const removeFromRender = (
  checkIfRendered: boolean,
  setCheckIfRendered: React.Dispatch<React.SetStateAction<boolean>>,
  scene: THREE.Scene,
  projectName: string,
  setAnyRendered: React.Dispatch<React.SetStateAction<boolean>>,
  isAnyRendered: boolean
) => {
  if (checkIfRendered === false) {
    if (isAnyRendered === true) {
      scene.children = [];
    }
    getThreeProject(scene, projectName);
    setCheckIfRendered(true);
    setAnyRendered(true);
  } else {
    scene.children = [];
    setCheckIfRendered(false);
    setAnyRendered(false);
  }
};

const checkIfAnyRendered = atom("false");

export default function Button(props: IButtonParams) {
  const { img, imgTitle, title, label, scene } = props;
  const [isAnyRendered, setAnyRendered] = useAtom(checkIfAnyRendered);
  const [checkIfRendered, setCheckIfRendered] = useState(false);

  return (
    <div
      className="buttonContainer"
      onClick={() => {
        removeFromRender(
          checkIfRendered,
          setCheckIfRendered,
          scene,
          "threeJsText",
          setAnyRendered,
          isAnyRendered
        );
      }}
    >
      <img src={img} alt={imgTitle} />
      <h4>{title}</h4>
      <label>{label}</label>
    </div>
  );
}
