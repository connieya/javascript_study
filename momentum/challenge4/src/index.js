const clockTitle = document.querySelector(".js-clock");

const getDate = () => {
  const todayDate = new Date();
  const chrisMasDate = new Date("2022-12-25");
  const res = chrisMasDate - todayDate;
  const day = String(Math.floor(res / (1000 * 60 * 60 * 24)));
  const hour = String(Math.floor((res / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const min = String(Math.floor((res / (1000 * 60)) % 60)).padStart(2, "0");
  const sec = String(Math.floor((res / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
};

setInterval(getDate, 1000);
