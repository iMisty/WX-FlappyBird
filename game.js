import {Main} from "./Main.js";

const canvas = document.getElementById('canvas');
console.log(canvas.width, canvas.height);
const context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(10, 10, 200, 200);

new Main();