"use strict";

const categoriesList = document.getElementById(`categories`);
const categoriesItems = categoriesList.querySelectorAll(`li.item`);
const categoriesCount = categoriesItems.length;
console.log(`Number of categories:${categoriesCount}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector(`h2`).textContent;
  const categoryItems = item.querySelectorAll(`li`);
  const categoryCount = categoryItems.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryCount} `);
});
