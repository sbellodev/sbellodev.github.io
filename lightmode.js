let darkmodeCount = 0;
let darkmode_btn = document.getElementsByClassName("darkmode-btn")[0];
darkmode_btn.addEventListener("click", function setDarkmode() {
  let bodyEl = document.getElementsByTagName("body")[0];
  let navEl = document.getElementsByTagName("nav")[0];
  let contactLogos = document.getElementsByClassName("logos");
  let submit = document.querySelectorAll("input[type=submit]")[0];
  let colorBlack = "rgb(24, 24, 24)";
  let colorWhite = "floralwhite";

  darkmodeCount++;
  if (darkmodeCount < 3) {
    darkmodeCount < 1
      ? (darkmode_btn.innerHTML = "No please :(")
      : darkmodeCount < 2
      ? (darkmode_btn.innerHTML = "Oh no...")
      : (darkmode_btn.innerHTML = "Don't!");

    setTimeout(() => (darkmode_btn.innerHTML = "LightMode"), 800);
  } else {
    if (darkmode_btn.innerHTML === "LightMode") {
      darkmode_btn.innerHTML = "DarkMode";
      bodyEl.style.backgroundColor = colorWhite;
      bodyEl.style.color = colorBlack;
      bodyEl.style.fontWeight = "bold";
      navEl.style.backgroundColor = "white";
      navEl.style.color = colorBlack;
      navEl.style.borderBottom = "2px solid " + colorBlack;
      contactLogos[0].src = "/img/twitter_reverse.svg";
      contactLogos[1].src = "/img/github_reverse.svg";
      contactLogos[2].src = "/img/linkedin_reverse.svg";
      contactLogos[3].src = "/img/mail_reverse.svg";
      submit.style.color = colorBlack;
      submit.style.border = "2px solid " + colorBlack;
      submit.style.backgroundColor = "white";
    } else if (darkmode_btn.innerHTML === "DarkMode") {
      darkmode_btn.innerHTML = "LightMode";
      bodyEl.style.backgroundColor = colorBlack;
      bodyEl.style.color = colorWhite;
      bodyEl.style.fontWeight = "normal";
      navEl.style.backgroundColor = colorBlack;
      navEl.style.borderBottom = "2px solid " + colorWhite;
      contactLogos[0].src = "/img/twitter.svg";
      contactLogos[1].src = "/img/github.svg";
      contactLogos[2].src = "/img/linkedin.svg";
      contactLogos[3].src = "/img/mail.svg";
      submit.style.color = "white";
      submit.style.border = "4px solid white";
      submit.style.backgroundColor = colorBlack;
    }
  }
});
