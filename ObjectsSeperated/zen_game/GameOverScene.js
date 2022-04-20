import Scene from "../engine/Scene.js"
import GameOverGameObject from "./GameOverGameObject.js";

class GameOverScene extends Scene {
  constructor() {
    super("Game Over Scene");
  }
  start(){
   this.gameObjects.push(new GameOverGameObject(500,250));
    
  }
}

export default GameOverScene;