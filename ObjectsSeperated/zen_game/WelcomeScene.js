import Scene from "../engine/Scene.js"
import WelcomeGameObject from "./WelcomeGameObject.js";
import ParticleGameObject from "./ParticleGameObject.js";
import Constants from "./Constants.js";
import BlueAutoGameObject from "./BlueAutoGameObject.js";

class WelcomeScene extends Scene {
  constructor() {
    super("Welcome Scene");
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
   //Blue Player Auto Play
   this.gameObjects.push(new BlueAutoGameObject(50,100,50,50,"blue"))

   //Red player Auto Play
   this.gameObjects.push(new BlueAutoGameObject(50,300,50,50,"red"))

   //Green Player Auto Play
   this.gameObjects.push(new BlueAutoGameObject(50,500,50,50,"green"))


    //Name of game
    let gameTitle = "Space Adventurers";
    this.gameObjects.push(new WelcomeGameObject(550,150,gameTitle));

    //Press Enter to begin
    let enterToBegin = "Press Enter to Start!"
    this.gameObjects.push(new WelcomeGameObject(550,650,enterToBegin))

    
  }
}

export default WelcomeScene;