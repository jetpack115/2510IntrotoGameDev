import Scene from "../engine/Scene.js"
import Story1GameObject from "./Story1GameObject.js";

class StoryScene1 extends Scene {
  constructor() {
    super("Story Scene 1");
  }
  start(){
   let x = 225; 
   const intro = ["The Year is 2099, the World has finally found peace, that is until resources start running out....",
        "In order to prevent civil unrest and stop the world from falling into chaos again, the World Central",
        "Ordinace has sent a group of 3 members to search for supplies to alleviate the increasing demands of the human race....."];
    let helper = 0;
    for (let i = 250; i <= 450; i += 100)
   {
    this.gameObjects.push(new Story1GameObject(x, i, intro[helper]));
    helper++;
   }
    
  }
}

export default StoryScene1;