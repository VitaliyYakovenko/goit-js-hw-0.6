
const categoriesListEl = document.querySelector("#categories");
const itemLiEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesListEl.children.length}`);



console.log(`Category:  ${itemLiEl[0].children[0].textContent}`);
console.log(`Elements:  ${itemLiEl[0].children[1].children.length}`);

console.log(`Category:  ${itemLiEl[1].children[0].textContent}`);
console.log(`Elements:  ${itemLiEl[1].children[1].children.length}`);

console.log(`Category  ${itemLiEl[2].children[0].textContent}`);
console.log(`Elements: ${itemLiEl[2].children[1].children.length}`);




// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5