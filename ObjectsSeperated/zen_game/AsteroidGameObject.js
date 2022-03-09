import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import AsteroidUpdateComponent from "./AsteroidUpdateComponent.js";
import AsteroidDrawComponent from "./AsteroidDrawComponent.js";

class AsteroidGameObject extends GameObject{
  constructor(x,y,w,h,r,g,b,startLevel){
    super();
    this.components.push(new AsteroidUpdateComponent(this,x,y,w,h,r,g,b,startLevel));
    this.components.push(new AsteroidDrawComponent(this));
  }
  update(){
    this.components.filter(c=>c.update).forEach(c=>c.update());
  }
  draw(ctx){
    this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
  }
}

export default AsteroidGameObject;