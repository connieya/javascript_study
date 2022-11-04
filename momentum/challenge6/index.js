const images = [];
for (let i = 0; i <= 6; i++) {
  let str = i + ".jpg";
  images.push(str);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(./img/${chosenImage})`;
document.body.style.backgroundSize = "100% 100%";
console.log(document.body.style);
