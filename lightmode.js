let darkmodeCount = 0;
let darkmode_btn = document.getElementsByClassName("darkmode-btn")[0];
let bodyEl = document.getElementsByTagName("body")[0];
let navEl = document.getElementsByTagName("nav")[0];
let contactLogos = document.getElementsByClassName("logos");
let colorBlack = "rgb(24, 24, 24)";
let colorWhite = "floralwhite";
let lastExp = document.getElementById("last-exp");

darkmode_btn.addEventListener("click", function setDarkmode() {
  if (darkmodeCount < 2) {
    darkmodeCount < 1
      ? (darkmode_btn.innerHTML = "Oh no...")
      : (darkmode_btn.innerHTML = "...");
    darkmodeCount++;
    setTimeout(() => (darkmode_btn.innerHTML = "LightMode"), 800);
  } else {
    if (darkmode_btn.innerHTML === "LightMode") {
      changeSecondaryColor("darkorange");
      changePrimaryColor("DarkMode", colorBlack, colorWhite, "bold");
      changeLogos("_reverse");
    } else if (darkmode_btn.innerHTML === "DarkMode") {
      changeSecondaryColor("gold");
      changePrimaryColor("LightMode", colorWhite, colorBlack, "normal");
      changeLogos();
    }
  }
});

function changeLogos(modo = "") {
  contactLogos[0].src = "/img/twitter" + modo + ".svg";
  contactLogos[1].src = "/img/github" + modo + ".svg";
  contactLogos[2].src = "/img/linkedin" + modo + ".svg";
  contactLogos[3].src = "/img/mail" + modo + ".svg";
}

function changePrimaryColor(mode, color, reverseColor, fontWeight) {
  darkmode_btn.innerHTML = mode;
  bodyEl.style.backgroundColor = reverseColor;
  bodyEl.style.color = color;
  bodyEl.style.fontWeight = fontWeight;
  navEl.style.backgroundColor = reverseColor;
  navEl.style.borderBottom = "2px solid " + color;
}

function changeSecondaryColor(color) {
  let allA = document.getElementsByTagName("a");
  let allSpan = document.getElementsByTagName("span");

  for (let i = 0; i < allA.length; i++) {
    allA[i].style.color = color;
  }
  for (let i = 0; i < allSpan.length; i++) {
    allSpan[i].style.color = color;
  }
}

function getLastExpTime() {
  var from = new Date("2021-12-10");
  var today = new Date();
  var totalMiliseconds = Math.abs(today - from);
  result = Math.ceil(totalMiliseconds / (1000 * 60 * 60 * 24 * 30));
  lastExp.style.color = "white";
  lastExp.innerHTML = result;
}

getLastExpTime();
