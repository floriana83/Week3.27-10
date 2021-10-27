const Dark = document.querySelector(".enableDarkMode");
Dark.addEventListener(
  "click",
  () => {
    document.body.classList.toggle("darkMode");});


    // const Lux = document.querySelector("enableLightMode");
    // Lux.addEventListener(
    //   "click",
    //   () => {
    //     const Lux = document.querySelector("button");
    //     document.body.classList.toggle("lightMode")});

const lightModeBtn = document.querySelector(".enableLightMode");
lightModeBtn.addEventListener(
    "click", () => {
   document.body.classList.toggle("lightMode");
    }
);

const allP = document.getElementsByTagName("p");
console.log(allP); 