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

type ProjectName = "threeJsText" | "threeJsGame";

const removeFromRender = (
  scene: THREE.Scene,
  projectName: ProjectName,
  setAnyRendered: React.Dispatch<React.SetStateAction<boolean>>,
  isAnyRendered: boolean
) => {
  if (isAnyRendered === true) {
    scene.children = [];
  } else {
    setAnyRendered(true);
  }
  getThreeProject(scene, projectName);
};

const checkIfAnyRendered = atom(false);

export default function Button(props: IButtonParams) {
  const { img, imgTitle, title, label, scene } = props;
  const [isAnyRendered, setAnyRendered] = useAtom(checkIfAnyRendered);

  return (
    <div
      className="buttonContainer"
      onClick={() => {
        removeFromRender(scene, "threeJsText", setAnyRendered, isAnyRendered);
      }}
    >
      <img src={img} alt={imgTitle} />
      <h4>{title}</h4>
      <label>{label}</label>
    </div>
  );
}
