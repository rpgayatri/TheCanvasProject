/** @type {HTMLElement} */
const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 30;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

drawOnCanvas = e => {
  if (isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    lastX = e.offsetX;
    lastY = e.offsetY;
    ctx.stroke();
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
  }
};

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mousemove", drawOnCanvas);
