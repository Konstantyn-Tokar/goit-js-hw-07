const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ================================  1  ============================ ( проверяли )
const galleryEl = document.querySelector('#gallery');
gallery.classList.add('gallery');
console.log('galleryEl', galleryEl);

// const imagesItem = images.reduce((acc, images) => {
//   return (
//     acc +
//     `<li class='gallery__list' ><img src='${images.url} alt='${images.alt}'></li>`
//   );
// }, '');

// gallery.insertAdjacentHTML('afterbegin', imagesItem);

// ================================  2  ============================ ( не проверяли )

const imagesItem = images.map(image => {
  return `<li class='gallery__list' ><img src='${image.url} alt='${image.alt}'></li>`;
}, '');

galleryEl.insertAdjacentHTML('beforeend', imagesItem.join(' '));
