import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import Input from "../engine/Input.js"
import Time from "../engine/Time.js";
import Game from "../engine/Game.js";
import Triangle from "../engine/Triangle.js";


class SelectCharacterUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
    this.speed = 4;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    let triangle = this.parent.getComponent("Triangle");

    if (Input.getKey("ArrowRight") && triangle.startX < 1025)
    {
      triangle.startX += 250
    }
    if (Input.getKey("ArrowLeft") && triangle.startX > 525)
    {
      triangle.startX -= 250
    }
    
    

    //Start Game if Player Presses any key
    if (Input.getKey("s"))
    {
      Game.changeScene(3)
    }
    
  }
}

export default SelectCharacterUpdateComponent;