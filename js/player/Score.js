import {DataStore} from "../base/DataStore.js";

export class Score {

    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;

        this.isScore = true;
    }

    draw() {
        this.ctx.font = '24px Arial';
        this.ctx.fillStyle = '#557eff';
        this.ctx.fillText(
            this.scoreNumber,
            DataStore.getInstance().canvas.width / 2,
            DataStore.getInstance().canvas.height / 18,
            888
        );
    }
}