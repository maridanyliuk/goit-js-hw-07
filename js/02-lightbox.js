import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}" >
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</div>`;
    })
    .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryImg);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

