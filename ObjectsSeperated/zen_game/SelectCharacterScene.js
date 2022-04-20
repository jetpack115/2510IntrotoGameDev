import Scene from "../engine/Scene.js"
import SelectCharacterGameObject from "./SelectCharacterGameObject.js";
import ParticleGameObject from "./ParticleGameObject.js";
import Constants from "./Constants.js";
import Rectangle from "../engine/Rectangle.js";
import possiblePlayerGameObject from "./possiblePlayerGameObject.js";
import WelcomeGameObject from "./WelcomeGameObject.js";

class SelectCharacterScene extends Scene {
  constructor() {
    super("Select Character Scene");
  }
  start(){
    //Define Particle Model
    for (let i = 0; i < Constants.maxParticles; i++) {

        let h = Constants.particleHeight

        let x = Math.floor(Math.random() * 1700) + 0;
        let y = Math.floor(Math.random() * 1000) + 0;
        let w = Constants.particleWidth + .25;

        this.gameObjects.push(new ParticleGameObject(x,y,w,h))
    }
    //Blue Player
    this.gameObjects.push(new possiblePlayerGameObject(500,350,50,50,"blue"))

    //Red player
    this.gameObjects.push(new possiblePlayerGameObject(750,350,50,50,"red"))

    //Green Player
    this.gameObjects.push(new possiblePlayerGameObject(1000,350,50,50,"green"))

    //This is where we use our SelectCharcterObject to give player a choice
    this.gameObjects.push(new SelectCharacterGameObject(525,410,20, "white")) 

    //Name of game
    let gameTitle = "Select Your Character";
    this.gameObjects.push(new WelcomeGameObject(550,150,gameTitle));

    //Press Enter to begin
    let enterToBegin = "Press S to Select!"
    this.gameObjects.push(new WelcomeGameObject(550,650,enterToBegin))
    
  }
}

export default SelectCharacterScene;