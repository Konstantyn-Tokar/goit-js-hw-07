// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', oninputName);

function oninputName(textName) {
  if (textName.currentTarget.value === '') {
    refs.spanEl.textContent = 'незнакомец';
  } else {
    refs.spanEl.textContent = textName.currentTarget.value;
  }
}
