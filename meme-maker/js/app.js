const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("line-width");

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
let isPainting = false;

canvas.addEventListener("mousemove", (event) => {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousedown", () => {
  isPainting = true;
});

canvas.addEventListener("mouseup", () => {
  isPainting = false;
});

canvas.addEventListener("mouseleave", () => {
  isPainting = false;
});

lineWidth.addEventListener("change", (event) => {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
});
