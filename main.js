let toggle = document.querySelector("#toggle");
let content = document.querySelector(".content");

toggle.addEventListener("change", e => {
  content.classList.toggle('show-monthly');
});


