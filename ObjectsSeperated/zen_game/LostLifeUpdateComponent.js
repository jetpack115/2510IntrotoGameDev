import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js"
import Constants from "./Constants.js";


class LostLifeUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
    this.lives = Constants.maxLives;
  }
  update() {
    this.time += Time.secondsBetweenFrame;

    if(this.time > 4)
    {
      this.lives -= 1;
      Game.changeScene(1)
    }

  }
}

export default LostLifeUpdateComponent;