import Chef1 from "./chef1.png";
import Chef2 from "./chef2.png";
import Chef3 from "./chef3.png";
import Chef4 from "./chef4.png";
import Chef5 from "./chef5.png";

const content = document.getElementById("content");

function setClass(elem, className) {
  elem.classList.add(className);
}

const clearContent = function (element) {
  element.innerHTML = "";
};

const loadMain = function () {
  const heading = document.createElement("h1");
  const cooks = document.createElement("div");
  const cooksTitle = document.createElement("div");
  cooksTitle.textContent = "Give warm welcome to our amazing cooks";

  const chiefs = [];
  const names = [];
  const containers = [];
  const para = [];
  clearContent(content);

  for (let i = 0; i < 4; i++) {
    const p = document.createElement("p");
    para.push(p);
  }
  for (let i = 0; i < 5; i++) {
    const cook = new Image();
    setClass(cook, "avi");
    chiefs.push(cook);
  }

  for (let i = 0; i < 5; i++) {
    const name = document.createElement("div");
    const container = document.createElement("div");
    setClass(name, "name");
    container.classList.add("cook");
    names.push(name);
    containers.push(container);
  }

  chiefs[0].src = Chef1;
  chiefs[1].src = Chef2;
  chiefs[2].src = Chef3;
  chiefs[3].src = Chef4;
  chiefs[4].src = Chef5;
  names[0].textContent = "Martina";
  names[1].textContent = "Arthur";
  names[2].textContent = "Palmer";
  names[3].textContent = "Dutch";
  names[4].textContent = "Devin";

  setClass(cooks, "cooks");
  setClass(cooksTitle, "cooksTitle");
  containers.forEach((container, index) => {
    container.appendChild(names[index]);
    container.appendChild(chiefs[index]);
  });

  containers.forEach((container) => cooks.append(container));

  heading.textContent = "Tiny Tastes";
  para[0].textContent =
    "Welcome to Tiny Tastes, where small bites pack a cosmic punch! Nestled in the heart of the multiverse, our restaurant takes you on an intergalactic journey through flavor. From miniature marvels to bite-sized wonders, each dish is a portal to culinary delight. Step into our dimension and savor the universe's smallest, yet most unforgettable, gastronomic adventures. Join us at 'Tiny Tastes'—where every bite is an epic odyssey!";

  para[1].textContent =
    "Embark on a culinary voyage through the cosmos at 'Micro Munchies,' where flavor knows no bounds and every dish is a universe unto itself. Our tiny titans of taste defy the laws of dimensionality, packing a universe of flavors into every petite portion. From our quantum quiches to our subatomic sliders, each dish is a masterpiece crafted with cosmic care. Join us at 'Micro Munchies,' where big flavor comes in small packages, and every bite is a journey through the infinite expanse of taste.";

  para[2].textContent =
    "At Restaurant Tiny Bites, crafting our meals is a meticulous art form, infused with passion and creativity. We begin by sourcing only the freshest, finest ingredients from local farmers and trusted suppliers, ensuring each component contributes to a symphony of flavors. Our chefs, skilled artisans of the culinary realm, embark on a journey of experimentation and innovation, constantly pushing boundaries to create dishes that tantalize the taste buds and ignite the senses. Every recipe is a labor of love, meticulously crafted with attention to detail and an unwavering commitment to quality. From delicate appetizers to hearty mains and decadent desserts, each dish tells a story, a narrative of tradition, innovation, and gastronomic delight.";

  para[3].textContent =
    " We strive to cater to diverse palates and dietary preferences, offering a wide array of options that cater to vegetarians, vegans, and meat lovers alike. Presentation is paramount at Tiny Bites, with each plate meticulously arranged to captivate not only the palate but also the eye. Our dedication to excellence extends beyond the kitchen, with attentive staff providing impeccable service, ensuring every dining experience is memorable and extraordinary. At Tiny Bites, we believe that a meal is not just sustenance; it is an experience to be savored, shared, and cherished. Join us on a culinary adventure where every bite is a journey into the sublime, where flavors dance on the palate and memories are made to last a lifetime. ";
  content.append(
    heading,
    para[0],
    para[1],
    para[2],
    para[3],
    cooksTitle,
    cooks
  );
};

export default { loadMain };
