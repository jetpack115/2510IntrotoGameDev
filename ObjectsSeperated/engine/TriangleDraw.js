import Component from "./Component.js"
import Triangle from "./Triangle.js";

class TriangleDraw extends Component {
    constructor(parent, fillStyle, strokeStyle) {
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }
    draw(ctx){
        let triangle = this.parent.getComponent("Triangle");
        //Calculate points based on our length wanted
        //We are going to make Equaliateral triangles

        let leftPointX = triangle.startX - (triangle.lineLength / 2)
        let leftPointY = triangle.startY + triangle.lineLength

        let rightPointX = triangle.startX + (triangle.lineLength / 2) 
        let rightPointY = leftPointY


        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;

        ctx.beginPath();
        ctx.moveTo(triangle.startX, triangle.startY)
        ctx.lineTo(leftPointX, leftPointY)
        ctx.lineTo(rightPointX, leftPointY)
        //ctx.moveTo(75, 50)
        //ctx.lineTo(50, 75)
        //ctx.lineTo(100, 75)
        ctx.fill()
        ctx.stroke()
    }

}

export default TriangleDraw