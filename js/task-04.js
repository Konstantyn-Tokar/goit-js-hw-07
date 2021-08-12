// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  return (refs.value.textContent = counterValue);
};

const increment = () => {
  counterValue += 1;
  return (refs.value.textContent = counterValue);
};

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);
