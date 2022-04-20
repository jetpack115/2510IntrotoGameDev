import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js"


class Story1UpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    if(this.time > 5){
        // Change to welcome scene
        Game.changeScene(1)
    }
  }
}

export default Story1UpdateComponent;