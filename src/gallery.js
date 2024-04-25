import gallery1 from "./meal1.jpg";
import gallery2 from "./meal2.jpg";
import gallery3 from "./kitchen1.jpg";
import gallery4 from "./kitchen2.jpg";

const content = document.getElementById("content");

function setClass(elem, className) {
  elem.classList.add(className);
}

const loadGallery = function () {
  content.innerHTML = "";

  const imageContainer = document.createElement("div");

  const images = [];
  const titles = [];
  const displays = [];

  for (let i = 0; i < 4; i++) {
    const img = new Image();
    const title = document.createElement("div");
    const display = document.createElement("div");
    images.push(img);
    titles.push(title);
    displays.push(display);
  }

  images[0].src = gallery1;
  images[1].src = gallery2;
  images[2].src = gallery3;
  images[3].src = gallery4;

  setClass(imageContainer, "imgContainer");
  images.forEach((image) => setClass(image, "galleryImage"));
  titles.forEach((title) => setClass(title, "galleryTitle"));

  displays.forEach((display, index) => {
    setClass(display, "display");
    display.appendChild(titles[index]);
    display.appendChild(images[index]);
    imageContainer.appendChild(display);
  });

  titles[0].textContent = "The world's tastiest meal";
  titles[1].textContent = "Our bestseller";
  titles[2].textContent = "Our kitchen - Here we do the magic!";
  titles[3].textContent = "Our second kitchen - sneak peek";

  content.appendChild(imageContainer);
};

export default { loadGallery };
