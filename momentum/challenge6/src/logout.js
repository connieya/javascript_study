const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("nickname");
  mainForm.classList.add("hidden");
  loginForm.style.display = "flex";
});
