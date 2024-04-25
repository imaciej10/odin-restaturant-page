import fbLogo from "./fb.png";
import linkedLogo from "./linked.png";
import igLogo from "./ig.png";
const socialContainer = document.createElement("div");
const socialTitle = document.createElement("div");
const footer = document.createElement("div");
const linkedIn = new Image();
const ig = new Image();
const fb = new Image();
const body = document.querySelector("body");

const clearContent = function (element) {
  element.innerHTML = "";
};

function setClass(elem, className) {
  elem.classList.add(className);
}

function setFooter() {
  footer.textContent = "Made with taste and passion";
}

function setMediaBar() {
  const logoArr = [ig, fb, linkedIn];
  linkedIn.src = linkedLogo;
  ig.src = igLogo;
  fb.src = fbLogo;

  clearContent(socialContainer);
  socialTitle.textContent = "Find us on social media";

  setClass(footer, "footer");
  setClass(socialTitle, "socialTitle");
  setClass(socialContainer, "social");

  logoArr.forEach((logo) => {
    setClass(logo, "logo");
    socialContainer.appendChild(logo);
  });
}

function appendFooter() {
  body.append(socialTitle);
  body.append(socialContainer);
  body.append(footer);
}

function addFooter() {
  setFooter();
  setMediaBar();
  appendFooter();
}
export default {
  addFooter,
};
