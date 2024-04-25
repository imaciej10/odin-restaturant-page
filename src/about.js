import map from "./map.jpg";
import map2 from "./map2.jpg";

const content = document.getElementById("content");

function setClass(elem, className) {
  elem.classList.add(className);
}

const loadAbout = function () {
  content.innerHTML = "";
  const aboutContainer = document.createElement("div");
  const aboutTitle = document.createElement("div");
  const aboutText = document.createElement("div");
  const location = document.createElement("div");
  const mapImage = new Image();
  const location2 = document.createElement("div");
  const mapImage2 = new Image();
  const address1 = document.createElement("div");
  const address2 = document.createElement("div");

  mapImage.src = map;
  mapImage2.src = map2;
  aboutTitle.textContent = "Tiny Tastes is here and boy it's here for good!";
  aboutText.textContent =
    "Welcome to the quirky culinary cosmos of Tiny Bites, where our kitchen is a playground and flavors are the merry-go-round! Prepare your taste buds for a rollercoaster ride through a universe of minuscule munchies and microscopic marvels. Our chefs are whimsical wizards, concocting dishes that defy gravity and tickle your funny bone. Ever tried a pancake the size of a thumbprint or a burger smaller than a button? At Tiny Bites, we believe in thinking outside the breadbox and playing with our food (with parental supervision, of course!). Every meal is a mini adventure, a treasure hunt for your taste buds in a world where big flavors come in pint-sized portions. So grab your magnifying glass and join us on a gastronomic journey where the only rule is: the tinier, the tastier! Because at Tiny Bites, we don't just serve meals; we serve smiles, giggles, and a pinch of pixie dust. Let's shrink down and chow down together at the wackiest restaurant this side of the teacup!";
  location.textContent = "You can find us here: ";
  location2.textContent = "And sometimes here :)";
  address1.textContent = " Valentine 123 Main Street 82032";
  address2.textContent = "Rhodes456 Oak Avenue 73412";

  setClass(aboutContainer, "about");
  setClass(aboutTitle, "about-title");
  setClass(aboutText, "about-text");
  setClass(location, "location");
  setClass(mapImage, "map");
  setClass(location2, "location");
  setClass(mapImage2, "map");
  setClass(address1, "address");
  setClass(address2, "address");

  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(aboutText);
  aboutContainer.appendChild(location);
  aboutContainer.appendChild(mapImage);
  aboutContainer.appendChild(address1);
  aboutContainer.appendChild(location2);
  aboutContainer.appendChild(mapImage2);
  aboutContainer.appendChild(address2);
  content.appendChild(aboutContainer);
};

export default { loadAbout };
