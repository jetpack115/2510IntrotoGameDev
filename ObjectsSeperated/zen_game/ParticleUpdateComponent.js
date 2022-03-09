import Component from "../engine/Component.js"
import Constants from "./Constants.js"




class ParticleUpdateComponent extends Component {
  constructor(parent, x, y, w, h, r, g, b,startLevel) {
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
    if (this.x > 0)
    {
        this.x = this.x - this.startLevel
    }
    else
    {
        this.x = this.x + 1700
    }
 
    
  }
  //mouseEvent(){
    //console.log("Mouse Event")
   // this.mouseDown = !this.mouseDown
  //}
}

export default ParticleUpdateComponent;