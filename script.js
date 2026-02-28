const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

const text = document.querySelector(".text");
const square = document.querySelector(".square");
const footer = document.querySelector(".footer-text");

first.addEventListener("click", () => {
  text.textContent = "First tab text";
  square.textContent = "Some first text again";
  footer.textContent = "Nothing here first";
});

second.addEventListener("click", () => {
  text.textContent = "Second tab text";
  square.textContent = "Some second text again";
  footer.textContent = "Nothing here second";
});

third.addEventListener("click", () => {
  text.textContent = "Third tab text";
  square.textContent = "Some third text again";
  footer.textContent = "Nothing here third";
});

fourth.addEventListener("click", () => {
  text.textContent = "Fourth tab text";
  square.textContent = "Some fourth text again";
  footer.textContent = "Nothing here fourth";
});
