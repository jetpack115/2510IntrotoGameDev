import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import {ease} from "../engine/scripts.js"
import Time from "../engine/Time.js"


class PlayerUpdateComponent extends Component {
  constructor(parent, x, y, w, h, r, g, b, startLevel) {
    super(parent);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.startLevel = startLevel
    this.mouseDown = false
  }
  update() {
    //If mouse is down go up
    if (this.mouseDown) {
      //Condition if player is off screen from bottom
      this.y = this.y + this.startLevel;
      if (this.y > 680 + this.h) 
      {
        this.y = 0;
      } 
    }
    else if (!this.mouseDown)
    {
      this.y = this.y - this.startLevel

      if (this.y < 0 - this.h)
      {
        this.y = 680;
      }
    }
    
  }
  mouseEvent(){
    console.log("Mouse Event")
    this.mouseDown = !this.mouseDown
  }
}

export default PlayerUpdateComponent;