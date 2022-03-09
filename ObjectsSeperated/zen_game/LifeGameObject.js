import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import LifeUpdateComponent from "./LifeUpdateComponent.js";
import LifeDrawComponent from "./LifeDrawComponent.js";

class LifeGameObject extends GameObject{
  constructor(x,y,w,h,r,g,b){
    super();
    this.components.push(new LifeUpdateComponent(this,x,y,w,h,r,g,b));
    this.components.push(new LifeDrawComponent(this));
  }
  update(){
    this.components.filter(c=>c.update).forEach(c=>c.update());
  }
  draw(ctx){
    this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
  }
}

export default LifeGameObject;