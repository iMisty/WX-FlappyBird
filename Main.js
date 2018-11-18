// 初始化
import {ResourceLoader} from "./js/base/ResourcesLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {Land} from "./js/runtime/Land.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Birds} from "./js/player/Birds.j";

export class Main {
    constructor() {
        this.canvas =document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        // 重置游戏
        this.director.isGameOver = false;

        this.dataStore
            .put('pencils', [])
            .put('background',BackGround)
            .put('land',Land)
            .put('birds',Birds);

        this.director.createPencil();
        Director.run();
    }
}