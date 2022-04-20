import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"

class WelcomeGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"Lives", "40px sans"))
    this.components.push(new TextDraw(this, "Green", "Green"))
  }
}

export default WelcomeGameObject;