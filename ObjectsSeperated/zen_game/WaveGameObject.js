import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import WaveUpdateComponent from "./WaveUpdateComponent.js"

class WaveGameObject extends GameObject{
  constructor(x,y,txt){
    super();
    this.components.push(new Text(this, x, y,txt, "35px sans"))
    this.components.push(new TextDraw(this, "Red", "White"))
    this.components.push(new WaveUpdateComponent(this))
  }
}

export default WaveGameObject;