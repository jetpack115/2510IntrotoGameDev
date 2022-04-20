import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import WelcomeUpdateComponent from "./WelcomeUpdateComponent.js"

class WelcomeGameObject extends GameObject{
  constructor(x,y,txt){
    super();
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,this.txt, "50px sans"))
    this.components.push(new TextDraw(this, "Green", "blue"))
    this.components.push(new WelcomeUpdateComponent(this))
  }
}

export default WelcomeGameObject;