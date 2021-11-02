// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galeryRef = document.querySelector(".gallery");


const createImg = galleryItems.map(image =>
  `<div class="gallery__item">
       <a class="gallery__item" href="${image.original}">
            <img class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
         />
    </a>
  </div>`
).join("");

galeryRef.insertAdjacentHTML('afterbegin', createImg);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
console.log(galleryItems);
