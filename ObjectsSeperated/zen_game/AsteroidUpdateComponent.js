import Component from "../engine/Component.js"
import Constants from "./Constants.js"




class AsteroidUpdateComponent extends Component {
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
  }
  update() {
    this.x = this.x - this.startLevel
    if (this.x < 0 && this.x > 0 - this.startLevel * 2)
    {
        // They all passed so just let them sit
    }
 
    
  }
  //mouseEvent(){
    //console.log("Mouse Event")
   // this.mouseDown = !this.mouseDown
  //}
}

export default AsteroidUpdateComponent;