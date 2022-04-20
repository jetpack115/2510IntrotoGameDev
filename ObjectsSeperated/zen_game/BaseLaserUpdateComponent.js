import Component from "../engine/Component.js"
import Input from "../engine/Input.js"
import Game from "../engine/Game.js";
import Constants from "./Constants.js"


class BaseLaserUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.speed = 1;

  }
  update() {
    // Get rectangle from our laser object
    let rectangle = this.parent.getComponent("Rectangle");

    // Get our player coordinates so that we can launch laser
    // from middle/ right side of our player

    let player = Game.findByType("PlayerGameObject");
    let playerX = Math.min(...player.map(p => p.getComponent("Rectangle").x)) + Constants.playerWidth;
    let playerY = Math.min(...player.map(p => p.getComponent("Rectangle").y)) + (Constants.playerHeight / 2)


    if (Input.getKey(" ") && rectangle.x < 0)
    {
      rectangle.y = playerY;
      rectangle.x = playerX;
      rectangle.x += this.speed;
    }
    if (rectangle.x > 0)
    {
      rectangle.x += this.speed
      if (rectangle.x > 1700)
      {
        rectangle.x = -10
        rectangle.y = -10
      }
    }

    
    



    //If spacebar is pressed down and hasnt been launched yet
    /*if (Input.getKey(" ") && rectangle.x < 0) {
      // Get Player current y position

      rectangle.y = playerY;
      rectangle.x = playerX;
      rectangle.x += this.speed;

       
    }
    else if (rectangle.x > -1 && rectangle.x <= 1500)
    {
      rectangle.x += this.speed;
    }
    else
    {
      rectangle.y = -1;
      rectangle.x = -1;
      rectangle.x += this.speed;
    }*/
    
  }
}

export default BaseLaserUpdateComponent;