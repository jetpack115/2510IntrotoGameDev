import GameObject from "../engine/GameObject.js"
import PlayerUpdateComponent from "./PlayerUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";


class PlayerGameObject extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Rectangle(this,x,y,w,h))
    this.components.push(new RectangleDraw(this, "Green", "yellow"))
    this.components.push(new PlayerUpdateComponent(this));
  }
}

export default PlayerGameObject;