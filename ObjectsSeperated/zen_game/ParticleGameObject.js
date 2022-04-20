import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import ParticleUpdateComponent from "./ParticleUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class ParticleGameObject extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Rectangle(this,x,y,w,h))
    this.components.push(new RectangleDraw(this, "White", "White"))
    this.components.push(new ParticleUpdateComponent(this));
  }
}

export default ParticleGameObject;