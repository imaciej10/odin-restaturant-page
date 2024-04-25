const content = document.getElementById("content");

function setClass(elem, className) {
  elem.classList.add(className);
}

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

export default { loadMenu };
