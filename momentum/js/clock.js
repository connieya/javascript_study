const clock = document.querySelector("h2#clock");

function getCLock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconnds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconnds}`;
}

setInterval(getCLock, 1000);
