"use strict";

const categoriesList = document.getElementById(`categories`);
const categoriesItems = categoriesList.querySelectorAll(`li.item`);
const categoriesCount = categoriesItems.length;
console.log(`Number of categories:${categoriesCount}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryUl = item.lastElementChild;
  const categoryItems = categoryUl.children;
  // const categoryCount = categoryItems.length;
  // console.log(categoryItems);
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length} `);
});
