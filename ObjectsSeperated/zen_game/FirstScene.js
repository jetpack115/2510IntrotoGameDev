import Scene from "../engine/Scene.js"
import Constants from "./Constants.js"

import PlayerGameObject from "./PlayerGameObject.js";
import ParticleGameObject from "./ParticleGameObject.js";
import AsteroidGameObject from "./AsteroidGameObject.js";
import LifeGameObject from "./LifeGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";
import BaseLaserGameObject from "./BaseLaserGameObject.js";
import WaveGameObject from "./WaveGameObject.js";
import LivesTextGameObject from "./LivesTextGameObject.js"

class FirstScene extends Scene {
  constructor() {
    super("First Level Scene")
  }
  start()
  {

    //Initialize The player object
    let playerHeight = Constants.playerHeight;        
    let playerWidth = Constants.playerWidth;
    let playerStartX = Constants.playerStartX;
    let playerStartY = Constants.playerStartY;

    //Initialize the asteroids
    let startAsteroidWidth = Constants.startAsteroidWidth;
    let startAsteroidHeight = Constants.startAsteroidHeight;
    let maxAsteroids = Constants.maxAsteroids;

       //Lives
    let startxLives = Constants.startxLives;
    let startyLives = Constants.startyLives;
    let lifeWidth = Constants.lifeWidth;
    let lifeHeight = Constants.lifeHeight;
    let maxLives = Constants.maxLives;

    //End Gates
    let firstGatex = Constants.firstGatex;
    let firstGatey = Constants.firstGatey;
    let gateWidth = Constants.gateWidth;
    let gateHeight = Constants.gateHeight;
    let maxGates = Constants.maxGates;

    //Star Particles
    let particleWidth = Constants.particleWidth;
    let particleHeight = Constants.particleHeight;
    let maxParticles = Constants.maxParticles;
    let stars = [];

    //Start level
    let startLevel = Constants.startLevel;

    //Asteroids passed
    let asteroidspassed = 0
        
        

    //Define Particle Model
    for (let i = 0; i < maxParticles; i++) {

        let h = particleHeight

        let x = Math.floor(Math.random() * 1700) + 0;
        let y = Math.floor(Math.random() * 1000) + 0;
        let w = particleWidth + startLevel;

        this.gameObjects.push(new ParticleGameObject(x,y,w,h))
    }

    // Define asteroid objects
    for (let i = 0; i < maxAsteroids; i++) {

        let h = startAsteroidHeight

        let x = Math.floor(Math.random() * 1700) + 500;
        let y = Math.floor(Math.random() * 1000) + 0;
        let w = startAsteroidWidth;

        this.gameObjects.push(new AsteroidGameObject(x,y,w,h))
    }

    //Define Player Model
    this.gameObjects.push(new PlayerGameObject(playerStartX,playerStartY,playerWidth,playerHeight))  
    
    
    // Define lifes model
    for (let i = 0; i < maxLives; i++) {

        let x = startxLives + (i * 50);
        let y = startyLives
        let w = lifeWidth;
        let h = lifeHeight;

        this.gameObjects.push(new LifeGameObject(x,y,w,h))
    }


    //Add laser!
    this.gameObjects.push(new BaseLaserGameObject(-10,-10,Constants.laserWidth,Constants.laserHeight))
    
    //Add the Score text
    this.gameObjects.push(new ScoreGameObject(100,30));

    //Add Wave text
    this.gameObjects.push(new WaveGameObject(725,75, "Wave 1", 1));

    //Add LivesText Object
    this.gameObjects.push(new LivesTextGameObject(1360,75))
  }
}

export default FirstScene;