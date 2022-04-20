import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import Game from "../engine/Game.js";
import Collisions from "../engine/Collisions.js";
import Time from "../engine/Time.js";





class AsteroidUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.speed = Constants.startLevel;
    this.lives = Constants.maxLives
    this.time = 0
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    let rectangle = this.parent.getComponent("Rectangle");
    let playerObject = Game.findByType("PlayerGameObject");
    let player = playerObject.map(p => p.getComponent("Rectangle"))

    //Get Our Wave stuff so we can resuse it
    let waveObject = Game.findByType("WaveGameObject");
    let wave = waveObject.map(p => p.getComponent("Text"))

    let baselaserObject = Game.findByType("BaseLaserGameObject");
    let baselaser = baselaserObject.map(p => p.getComponent("Rectangle"))

    //let playerX = Math.min(...player.map(p => p.getComponent("Rectangle").x))
    //let playerY = Math.min(...player.map(p => p.getComponent("Rectangle").y))

    //let playerxBoundry = playerX + Constants.playerWidth;
    //let playeryBoundry = playerY + Constants.playerHeight;

    //Get Laser position to detect a collision
    //let bLaserX = Math.min(...baselaser.map(p => p.getComponent("Rectangle").x))
    //let bLaserY = Math.min(...baselaser.map(p => p.getComponent("Rectangle").y))
    //let bLaserxBoundry = bLaserX + Constants.laserWidth;
    //let bLaseryBoundry = bLaserY + Constants.laserHeight;


    
    //Laser has hit asteroid
    /*if ((rectangle.x <= bLaserxBoundry) && (rectangle.x >= bLaserX) && 
    (rectangle.y <= bLaseryBoundry) && rectangle.y >= bLaserY)
    {
      //Asteroid has been hit with laser
      rectangle.x = -1
      rectangle.y = -1
    }*/

    //With collisions asteroid and laser
    if (Collisions.inCollision(rectangle, baselaser))
    {
      //Asteroid has been hit with laser
      rectangle.x = -1
      rectangle.y = -1
    }

    if (Collisions.inCollision(rectangle, player))
    {
      Game.changeScene(2)
    }



   
    /*if ((rectangle.x <= playerxBoundry) && (rectangle.x >= playerX) && 
      (rectangle.y <= playeryBoundry) && rectangle.y >= playerY)
    {
      // Player hit an asteroid
      
      //Check if lives > 0, if so change to lost life screen
      if (this.lives > 0)
      {
        this.lives--;
        Game.changeScene(2)
      }
      // All lives used
      else
      {
        Game.changeScene(3);
      }

    }*/

    //Wave 2
    if(this.time >= 25)
    {
      this.time = 0;
      wave.x = 725
      wave.y = 75
      this.text = "Wave 2"
      

    }
    
    
    rectangle.x = rectangle.x - this.speed;
    
  }
  //mouseEvent(){
    //console.log("Mouse Event")
   // this.mouseDown = !this.mouseDown
  //}
}

export default AsteroidUpdateComponent;