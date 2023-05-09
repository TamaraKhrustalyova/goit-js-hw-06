const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map(item => {
  const listItem = document.createElement('li')
  listItem.textContent = item;
  listItem.classList.add('item');
  
  return listItem;
});

const ingredientsEl = document.getElementById('ingredients');

ingredientsEl.append(...list);
console.log(ingredientsEl);