import Component from "../engine/Component.js"
import Constants from "./Constants.js"


class LifeUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.lives = Constants.maxLives
  }
  update() {
    //If life lost change scene and remove a life


  }
}

export default LifeUpdateComponent;