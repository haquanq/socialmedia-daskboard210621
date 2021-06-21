const toggleButton = document.querySelector("#toggleColorMode");
const main = document.querySelector(".main");
const head = document.querySelector(".head");
const backgr = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  if (toggleButton.checked) {
    console.log("Toggle Light Mode");
    main.classList.add("light");
    head.classList.add("light");
    backgr.classList.add("light");
  } else {
    console.log("Toggle Dark Mode");
    main.classList.remove("light");
    head.classList.remove("light");
    backgr.classList.remove("light");
  }
});
