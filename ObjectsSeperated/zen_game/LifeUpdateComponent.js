import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import {ease} from "../engine/scripts.js"
import Time from "../engine/Time.js"


class LifeUpdateComponent extends Component {
  constructor(parent, x, y, w, h, r, g, b) {
    super(parent);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  update() {
    //If life lost remove one?!

  }
}

export default LifeUpdateComponent;