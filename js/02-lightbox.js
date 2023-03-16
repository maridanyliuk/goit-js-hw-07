import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const elements = [];
galleryItems.forEach((e) => {
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('.gallery-link');
    galleryLink.href = e.original;
    
    const galleryImg = document.createElement('img');
    galleryImg.classList.add('.gallery-img');
    galleryImg.src = e.preview;
    galleryImg.setAttribute("title", e.description);
    galleryImg.alt = e.description;
    galleryLink.append(galleryImg);
    elements.push(galleryLink);
});
gallery.append(...elements);
new SimpleLightbox(".gallery a", {
    captionDelay:250,
})

console.log(galleryItems);
