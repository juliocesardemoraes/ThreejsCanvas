import "./App.css";
import CanvasThreeJs from "./components/Canvas/Canvas";
import React from "react";
import List from "./components/List/List";
import * as THREE from "three";

function App() {
  const canvasReference = React.createRef<HTMLCanvasElement>();
  const scene = new THREE.Scene();

  return (
    <div className="App">
      <div className="main__container">
        <h1 className="title">THREEJS PROJECTS</h1>
        <CanvasThreeJs
          canvasReference={canvasReference}
          scene={scene}
        ></CanvasThreeJs>
        <List scene={scene}></List>
      </div>
    </div>
  );
}

export default App;
