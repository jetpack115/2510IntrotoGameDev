import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import Input from "../engine/Input.js"
import Time from "../engine/Time.js";
import Game from "../engine/Game.js";


class BlueAutoUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
    this.speed = 4;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    let rectangle = this.parent.getComponent("Rectangle");


    //Down
    if (this.time >= 10 && this.time < 15 ) {
      //Condition if player is off screen from bottom
      rectangle.y = rectangle.y + this.speed;
      if (rectangle.y > 680 + rectangle.h) 
      {
        rectangle.y = 0;
      } 
    }
    //Up
    if (this.time >= 20 && this.time < 25)
    {
      rectangle.y = rectangle.y - this.speed

      if (rectangle.y < 0 - rectangle.h)
      {
        rectangle.y = 680;
      }
    }
    //Left
    if (((this.time >= 15 && this.time < 20) ))
    {
      rectangle.x = rectangle.x - this.speed
      if (rectangle.x < -50)
      {
          rectangle.x = 1500
      }

    }
    //Right
    if (this.time >= 5 && this.time < 10)
    {
      rectangle.x = rectangle.x + this.speed
      if (rectangle.x >= 1500)
      {
          rectangle.x = 0
      }
    }

    //Start Game if Player Presses any key
    if (Input.getKey("Enter"))
    {
      Game.changeScene(2)
    }
    
  }
}

export default BlueAutoUpdateComponent;