const Dark = document.querySelector(".enableDarkMode");
Dark.addEventListener(
  "click",
  () => {
    document.body.classList.toggle("darkMode");});


const light = document.querySelector("#enableLightMode");
light.addEventListener(
    "click", () => {
      const lightbt = document.querySelector(".wrapperDue");
      lightbt.classList.toggle("lightMode");
    }
);

const allp = document.getElementsByTagName("p");
console.log(allp); 