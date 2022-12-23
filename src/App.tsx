import "./App.css";
import CanvasThreeJs from "./components/Canvas/Canvas";

function App() {
  return (
    <div className="App">
      <div className="main__container">
        <h1 className="title">THREEJS PROJECTS</h1>
        <CanvasThreeJs></CanvasThreeJs>
        <div className="main__container__cards">
          <div>
            <img />
            <h4>Amazing 3d text render with threejs</h4>
            <label>3D Text</label>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
