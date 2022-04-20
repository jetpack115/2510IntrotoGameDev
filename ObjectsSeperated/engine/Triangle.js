import Component from "./Component.js"

class Triangle extends Component {
    constructor(parent, startX, startY, lineLength) {
        super(parent);
        this.startX = startX
        this.startY = startY
        this.lineLength = lineLength

    }

}

export default Triangle