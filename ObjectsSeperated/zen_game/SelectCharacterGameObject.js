import GameObject from "../engine/GameObject.js"
import Triangle from "../engine/Triangle.js";
import TriangleDraw from "../engine/TriangleDraw.js";
import SelectCharacterUpdateComponent from "./SelectCharacterUpdateComponent.js";


class SelectCharacterGameObject extends GameObject{
  constructor(startX,startY,lineLength,color){
    super();
    this.components.push(new Triangle(this,startX,startY,lineLength))
    this.components.push(new TriangleDraw(this, color))
    this.components.push(new SelectCharacterUpdateComponent(this))
  }
}

export default SelectCharacterGameObject;