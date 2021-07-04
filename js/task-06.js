// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input')
const lengthInput = input.getAttribute('data-length');

function colorInput() {
    if (+lengthInput === input.value.length) {
        input.classList.add('valid')
        input.classList.remove('invalid')
        //Для себя =====
        console.log('Ведено 6 символов');
        //==============
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
        //Для себя =====
        console.log(`Ведено не 6 символов , а ${input.value.length}`)
        //==============
    }
}

input.addEventListener('blur', colorInput)