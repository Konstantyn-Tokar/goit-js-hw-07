// ===================================== 1 =====================================
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

const itemCategoryEl = document.querySelector('ul#categories')
console.log(`В списке ${itemCategoryEl.children.length} категории`)


// ===================================== 2 =====================================
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const listCategoriesEl = document.querySelectorAll('.item')

listCategoriesEl.forEach(category => {
    console.log('Категория:' , category.querySelector('h2').textContent)
    console.log('Количество элементов:' ,category.querySelectorAll('li').length)
})