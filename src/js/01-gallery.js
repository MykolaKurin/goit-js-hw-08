import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

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
