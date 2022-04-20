import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import Game from "../engine/Game.js"




class ParticleUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.startLevel = Game.currentSceneIndex * .5
  }
  update() {
    let rectangle = this.parent.getComponent("Rectangle");
  
    if (rectangle.x > 0)
    {
        rectangle.x = rectangle.x - this.startLevel
    }
    else
    {
        rectangle.x = rectangle.x + 1700
    }    
  }
}

export default ParticleUpdateComponent;