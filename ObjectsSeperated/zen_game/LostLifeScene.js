import Scene from "../engine/Scene.js"
import LostLifeGameObject from "./LostLifeGameObject.js";

class LostLifeScene extends Scene {
  constructor() {
    super("Lost Life Scene");
  }
  start(){
   this.gameObjects.push(new LostLifeGameObject(500,250));
    
  }
}

export default LostLifeScene;