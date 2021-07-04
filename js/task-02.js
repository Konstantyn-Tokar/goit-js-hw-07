const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredientsListEl = document.querySelector('#ingredients')

console.log("ingredientsListEl", ingredientsListEl)

const listsIngredients = ingredients.map(ingredient => {
 const itemIngredient = document.createElement('li');
  itemIngredient.textContent = ingredient;

  return itemIngredient;
})

ingredientsListEl.append(...listsIngredients);