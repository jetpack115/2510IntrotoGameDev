import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import LostLifeUpdateComponent from "./WelcomeUpdateComponent.js"

class LostLifeGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"You Lost a Life!", "50px sans"))
    this.components.push(new TextDraw(this, "Red", "Red"))
    this.components.push(new LostLifeUpdateComponent(this))
  }
}

export default LostLifeGameObject;