import _ from "lodash";
import "./style.css";
import mainModule from "./main.js";
import galleryModule from "./gallery.js";
import aboutModule from "./about.js";
import menuModule from "./menu.js";
import footerModule from "./footer.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const galleryBtn = document.querySelector(".gallery");

const buttons = [menuBtn, aboutBtn, galleryBtn, homeBtn];

function setClass(elem, className) {
  elem.classList.add(className);
}

function resetBtnClasses() {
  buttons.forEach((button) => button.classList.remove("active"));
}

homeBtn.addEventListener("click", () => {
  resetBtnClasses();
  mainModule.loadMain();
  setClass(homeBtn, "active");
});

menuBtn.addEventListener("click", () => {
  resetBtnClasses();
  menuModule.loadMenu();

  setClass(menuBtn, "active");
});

aboutBtn.addEventListener("click", () => {
  resetBtnClasses();
  aboutModule.loadAbout();

  setClass(aboutBtn, "active");
});
galleryBtn.addEventListener("click", () => {
  resetBtnClasses();
  galleryModule.loadGallery();
  setClass(galleryBtn, "active");
});

mainModule.loadMain();
footerModule.addFooter();
