import Component from "../engine/Component.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"
import Text from "../engine/Text.js"


class WelcomeUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    let textHelper = this.parent.getComponent("Text")

    if(this.time > 4)
    {      
      textHelper.x -= 5
    }
    /*if (asteroids.x < 0  )
    {
        //End of wave--> Change this.txt to Wave 2
        this.txt = "Wave"
    }*/
  }
}

export default WelcomeUpdateComponent;