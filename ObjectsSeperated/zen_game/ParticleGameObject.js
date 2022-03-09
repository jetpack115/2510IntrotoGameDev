import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import ParticleUpdateComponent from "./ParticleUpdateComponent.js";
import ParticleDrawComponent from "./ParticleDrawComponent.js";

class ParticleGameObject extends GameObject{
  constructor(x,y,w,h,r,g,b,startLevel){
    super();
    this.components.push(new ParticleUpdateComponent(this,x,y,w,h,r,g,b,startLevel));
    this.components.push(new ParticleDrawComponent(this));
  }
  update(){
    this.components.filter(c=>c.update).forEach(c=>c.update());
  }
  draw(ctx){
    this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
  }
}

export default ParticleGameObject;