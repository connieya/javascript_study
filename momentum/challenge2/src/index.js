const body = document.querySelector("body");
const h1 = document.querySelector("h1");
body.style.background = "skyblue";
h1.style.color = "white";

window.addEventListener("resize", () => {
  if (window.innerWidth < 700) {
    body.style.background = "skyblue";
  } else if (window.innerWidth < 1000) {
    body.style.background = "purple";
  } else if (window.innerHeight < 1300) {
    body.style.background = "orange";
  }
});
