const listRef = document.getElementById("ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const markup = ingredients.forEach((el) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = el;

    listRef.append(itemRef);
});

