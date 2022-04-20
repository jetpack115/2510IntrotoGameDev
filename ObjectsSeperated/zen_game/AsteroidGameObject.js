import GameObject from "../engine/GameObject.js"
import AsteroidUpdateComponent from "./AsteroidUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class AsteroidGameObject extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Rectangle(this, x, y, w, h));
    this.components.push(new RectangleDraw(this, "Brown", "Brown"))
    this.components.push(new AsteroidUpdateComponent(this));
  }
}

export default AsteroidGameObject;