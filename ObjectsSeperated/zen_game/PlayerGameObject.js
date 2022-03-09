import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import PlayerUpdateComponent from "./PlayerUpdateComponent.js";
import PlayerDrawComponent from "./PlayerDrawComponent.js";

class PlayerGameObject extends GameObject{
  constructor(x,y,w,h,r,g,b,startLevel){
    super();
    this.components.push(new PlayerUpdateComponent(this,x,y,w,h,r,g,b,startLevel));
    this.components.push(new PlayerDrawComponent(this));
  }
  update(){
    this.components.filter(c=>c.update).forEach(c=>c.update());
  }
  draw(ctx){
    this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
  }
}

export default PlayerGameObject;