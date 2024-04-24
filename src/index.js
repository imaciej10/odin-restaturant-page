console.log("XDdddd");
import _ from "lodash";
import "./style.css";
import Chef1 from "./chef1.png";
import Chef2 from "./chef2.png";
import Chef3 from "./chef3.png";
import Chef4 from "./chef4.png";
import Chef5 from "./chef5.png";
import fbLogo from "./fb.png";
import linkedLogo from "./linked.png";
import igLogo from "./ig.png";
import map from "./map.jpg";
import map2 from "./map2.jpg";
import gallery1 from "./meal1.jpg";
import gallery2 from "./meal2.jpg";
import gallery3 from "./kitchen1.jpg";
import gallery4 from "./kitchen2.jpg";

const socialContainer = document.createElement("div");
const socialTitle = document.createElement("div");
const linkedIn = new Image();
const ig = new Image();
const fb = new Image();
const footer = document.createElement("div");
const body = document.querySelector("body");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const galleryBtn = document.querySelector(".gallery");
const content = document.getElementById("content");

const buttons = [menuBtn, aboutBtn, galleryBtn, homeBtn];
function resetBtnClasses() {
  buttons.forEach((button) => button.classList.remove("active"));
}

function setMediaBar() {
  const logoArr = [ig, fb, linkedIn];
  linkedIn.src = linkedLogo;
  ig.src = igLogo;
  fb.src = fbLogo;
  socialTitle.textContent = "Find us on social media";

  setClass(footer, "footer");
  setClass(socialTitle, "socialTitle");
  setClass(socialContainer, "social");

  logoArr.forEach((logo) => {
    setClass(logo, "logo");
    socialContainer.appendChild(logo);
  });
}

function setFooter() {
  footer.textContent = "Made with taste and passion";
}

function setClass(elem, className) {
  elem.classList.add(className);
}

const loadPage = function () {
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const heading = document.createElement("h1");
  const cooks = document.createElement("div");
  const cooksTitle = document.createElement("div");
  cooksTitle.textContent = "Give warm welcome to our amazing cooks";

  const names = [];
  const containers = [];
  const cook1 = new Image();
  const cook2 = new Image();
  const cook3 = new Image();
  const cook4 = new Image();
  const cook5 = new Image();

  clearContent(content);
  clearContent(socialContainer);
  setMediaBar();
  setFooter();

  cook1.src = Chef1;
  cook2.src = Chef2;
  cook3.src = Chef3;
  cook4.src = Chef4;
  cook5.src = Chef5;

  for (let i = 0; i < 5; i++) {
    const name = document.createElement("div");
    const container = document.createElement("div");
    name.classList.add("name");
    container.classList.add("cook");
    names.push(name);
    containers.push(container);
  }

  names[0].textContent = "Martina";
  names[1].textContent = "Arthur";
  names[2].textContent = "Palmer";
  names[3].textContent = "Dutch";
  names[4].textContent = "Devin";

  names.forEach((name) => setClass(name, "name"));
  setClass(cook1, "avi");
  setClass(cook2, "avi");
  setClass(cook3, "avi");
  setClass(cook4, "avi");
  setClass(cook5, "avi");
  setClass(cooks, "cooks");
  setClass(cooksTitle, "cooksTitle");
  containers.forEach((container, index) => {
    container.appendChild(names[index]);
    container.appendChild([cook1, cook2, cook3, cook4, cook5][index]);
  });
  containers.forEach((container) => cooks.append(container));

  heading.textContent = "Tiny Tastes";
  p1.textContent =
    "Welcome to Tiny Tastes, where small bites pack a cosmic punch! Nestled in the heart of the multiverse, our restaurant takes you on an intergalactic journey through flavor. From miniature marvels to bite-sized wonders, each dish is a portal to culinary delight. Step into our dimension and savor the universe's smallest, yet most unforgettable, gastronomic adventures. Join us at 'Tiny Tastes'—where every bite is an epic odyssey!";

  p2.textContent =
    "Embark on a culinary voyage through the cosmos at 'Micro Munchies,' where flavor knows no bounds and every dish is a universe unto itself. Our tiny titans of taste defy the laws of dimensionality, packing a universe of flavors into every petite portion. From our quantum quiches to our subatomic sliders, each dish is a masterpiece crafted with cosmic care. Join us at 'Micro Munchies,' where big flavor comes in small packages, and every bite is a journey through the infinite expanse of taste.";

  p3.textContent =
    "At Restaurant Tiny Bites, crafting our meals is a meticulous art form, infused with passion and creativity. We begin by sourcing only the freshest, finest ingredients from local farmers and trusted suppliers, ensuring each component contributes to a symphony of flavors. Our chefs, skilled artisans of the culinary realm, embark on a journey of experimentation and innovation, constantly pushing boundaries to create dishes that tantalize the taste buds and ignite the senses. Every recipe is a labor of love, meticulously crafted with attention to detail and an unwavering commitment to quality. From delicate appetizers to hearty mains and decadent desserts, each dish tells a story, a narrative of tradition, innovation, and gastronomic delight. We strive to cater to diverse palates and dietary preferences, offering a wide array of options that cater to vegetarians, vegans, and meat lovers alike. Presentation is paramount at Tiny Bites, with each plate meticulously arranged to captivate not only the palate but also the eye. Our dedication to excellence extends beyond the kitchen, with attentive staff providing impeccable service, ensuring every dining experience is memorable and extraordinary. At Tiny Bites, we believe that a meal is not just sustenance; it is an experience to be savored, shared, and cherished. Join us on a culinary adventure where every bite is a journey into the sublime, where flavors dance on the palate and memories are made to last a lifetime.";
  content.append(heading, p1, p2, p3, cooksTitle, cooks);

  body.append(socialTitle);
  body.append(socialContainer);
  body.append(footer);
};

const clearContent = function (element) {
  element.innerHTML = "";
};

function createMealElement(elem) {
  const mealElement = document.createElement("div");
  const nameElement = document.createElement("div");
  const priceElement = document.createElement("div");
  const descriptionElement = document.createElement("div");

  nameElement.textContent = elem.name;
  priceElement.textContent = elem.price;
  descriptionElement.textContent = elem.description;

  setClass(nameElement, "mealName");
  setClass(priceElement, "mealPrice");
  setClass(descriptionElement, "mealDescription");

  mealElement.appendChild(nameElement);
  mealElement.appendChild(descriptionElement);
  mealElement.appendChild(priceElement);

  setClass(mealElement, "mealContainer");
  return mealElement;
}
const loadMenu = function () {
  content.innerHTML = "";

  setMediaBar();
  setFooter();
  const menuContainer = document.createElement("div");
  const menuTitle = document.createElement("div");

  setClass(menuContainer, "menuContainer");
  function Meal(name, price, description) {
    (this.name = name), (this.price = price), (this.description = description);
  }

  const meal1 = new Meal(
    "Stellar Salad",
    "$8.99",
    "Fresh mixed greens tossed with ripe cherry tomatoes, crunchy cucumbers, and creamy avocado, drizzled with a zesty lemon vinaigrette."
  );

  const meal2 = new Meal(
    "Cosmic Burger",
    "$10.99",
    "A heavenly combination of prime beef, melted cheese, crisp lettuce, and tangy pickles, all nestled between two fluffy brioche buns."
  );

  const meal3 = new Meal(
    "Galactic Pasta",
    "$12.99",
    "Twirls of al dente spaghetti bathed in a rich marinara sauce, studded with savory meatballs and finished with a sprinkle of Parmesan cheese."
  );

  const meal4 = new Meal(
    "Interstellar Pizza",
    "$11.99",
    "A tantalizing medley of gooey mozzarella, spicy pepperoni, and sweet bell peppers atop a crispy thin crust, baked to perfection."
  );

  const meal5 = new Meal(
    "Nebula Noodles",
    "$9.99",
    "Slippery strands of rice noodles stir-fried with fresh vegetables and succulent shrimp, seasoned with aromatic herbs and spices."
  );

  const meals = [meal1, meal2, meal3, meal4, meal5];

  menuTitle.textContent = "Our mouth-watering meals that await for you";

  setClass(menuTitle, "menuTitle");

  meals.forEach((meal) => {
    menuContainer.appendChild(createMealElement(meal));
  });

  content.appendChild(menuTitle);
  content.appendChild(menuContainer);
};

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

const loadGallery = function () {
  content.innerHTML = "";

  setMediaBar();
  setFooter();

  const imageContainer = document.createElement("div");
  const title1 = document.createElement("div");
  const title2 = document.createElement("div");
  const title3 = document.createElement("div");
  const title4 = document.createElement("div");
  const display1 = document.createElement("div");
  const display2 = document.createElement("div");
  const display3 = document.createElement("div");
  const display4 = document.createElement("div");

  const img1 = new Image();
  const img2 = new Image();
  const img3 = new Image();
  const img4 = new Image();

  img1.src = gallery1;
  img2.src = gallery2;
  img3.src = gallery3;
  img4.src = gallery4;

  const images = [img1, img2, img3, img4];
  const titles = [title1, title2, title3, title4];
  const displays = [display1, display2, display3, display4];

  setClass(imageContainer, "imgContainer");
  images.forEach((image) => setClass(image, "galleryImage"));
  titles.forEach((title) => setClass(title, "galleryTitle"));

  displays.forEach((display, index) => {
    setClass(display, "display");
    display.appendChild(titles[index]);
    display.appendChild(images[index]);
    imageContainer.appendChild(display);
  });

  title1.textContent = "The world's tastiest meal";
  title2.textContent = "Our bestseller";
  title3.textContent = "Our kitchen - Here we do the magic!";
  title4.textContent = "Our second kitchen - sneak peek";

  content.appendChild(imageContainer);
};

loadPage();

homeBtn.addEventListener("click", () => {
  loadPage();
  resetBtnClasses();
  setClass(homeBtn, "active");
});

menuBtn.addEventListener("click", () => {
  loadMenu();
  resetBtnClasses();
  setClass(menuBtn, "active");
});

aboutBtn.addEventListener("click", () => {
  loadAbout();
  resetBtnClasses();
  setClass(aboutBtn, "active");
});
galleryBtn.addEventListener("click", () => {
  loadGallery();
  resetBtnClasses();
  setClass(galleryBtn, "active");
});
