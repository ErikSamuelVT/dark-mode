const ct = document.getElementById("flexSwitchCheckDefault");
const localConfig = localStorage.getItem("theme");
let colorTema;

//CONFIG SYSTEM
if (localConfig === "dark") {
  body.classList.remove("bg-lightBody");
  nav.classList.remove("navbar-light");
  nav.classList.remove("bg-lightBlue");

  body.classList.add("bg-darkNightBody");
  nav.classList.add("navbar-dark");
  nav.classList.add("bg-darkNight");
  colorTema = "dark";
  localStorage.setItem("theme", colorTema);
  ct.checked = true;
} else {
  body.classList.add("bg-lighlightBodyBlue");
  nav.classList.add("navbar-light");
  nav.classList.add("bg-lightBlue");

  body.classList.remove("bg-darkNightBody");
  nav.classList.remove("navbar-dark");
  nav.classList.remove("bg-darkNight");
  colorTema = "light";
  localStorage.setItem("theme", colorTema);
  ct.checked = false;
}
//CONFIG USER
function clickMe() {
  const nav = document.getElementById("nav");
  const body = document.getElementById("body");

  if (ct.checked) {
    //white to black
    body.classList.remove("bg-lightBody");
    nav.classList.remove("navbar-light");
    nav.classList.remove("bg-lightBlue");

    body.classList.add("bg-darkNightBody");
    nav.classList.add("navbar-dark");
    nav.classList.add("bg-darkNight");
    colorTema = "dark";
    localStorage.setItem("theme", colorTema);
  } else {
    //dark to white
    body.classList.add("bg-lightBody");
    nav.classList.add("navbar-light");
    nav.classList.add("bg-lightBlue");

    body.classList.remove("bg-darkNightBody");
    nav.classList.remove("navbar-dark");
    nav.classList.remove("bg-darkNight");
    colorTema = "light";
    localStorage.setItem("theme", colorTema);
  }
}
