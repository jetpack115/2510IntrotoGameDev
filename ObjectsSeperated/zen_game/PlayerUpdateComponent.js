import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import Input from "../engine/Input.js"


class PlayerUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.startLevel = Constants.startLevel;
    //this.mouseDown = false
  }
  update() {
    let rectangle = this.parent.getComponent("Rectangle");


    //If mouse is down go up
    if (Input.getKey("ArrowDown")) {
      //Condition if player is off screen from bottom
      rectangle.y = rectangle.y + this.startLevel;
      if (rectangle.y > 680 + rectangle.h) 
      {
        rectangle.y = 0;
      } 
    }
    if (Input.getKey("ArrowUp"))
    {
      rectangle.y = rectangle.y - this.startLevel

      if (rectangle.y < 0 - rectangle.h)
      {
        rectangle.y = 680;
      }
    }
    if (Input.getKey("ArrowLeft") && rectangle.x >= 0)
    {
      rectangle.x = rectangle.x - this.startLevel

    }
    if (Input.getKey("ArrowRight"))
    {
      rectangle.x = rectangle.x + this.startLevel
    }
    
  }
  mouseEvent(){
    console.log("Mouse Event")
    this.mouseDown = !this.mouseDown
  }
}

export default PlayerUpdateComponent;