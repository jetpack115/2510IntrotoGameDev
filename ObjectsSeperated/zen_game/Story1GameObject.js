import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import Story1UpdateComponent from "./Story1UpdateComponent.js"

class Story1GameObject extends GameObject{
  constructor(x,y,txt){
    super();
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,this.txt,
        "25px sans"))
    this.components.push(new TextDraw(this, "Green", "blue"))
    this.components.push(new Story1UpdateComponent(this))
  }
}

export default Story1GameObject;