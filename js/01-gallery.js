import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const elements = [];

galleryItems.forEach((e) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('.gallery-item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('.gallery-link');
    galleryLink.href = e.original;
    
    const galleryImg = document.createElement('img');
    galleryImg.classList.add('.gallery-img');
    galleryImg.src = e.preview;
    galleryImg.setAttribute("data-source", e.original);
    galleryImg.alt = e.description;
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);
    elements.push(galleryItem);
})

gallery.append(...elements);
document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const selectedImg = basicLightbox.create(
        `<img src = "${selectedImg}" width="800" height="600"`,
        {
            onShow: () => {
                document.addEventListener("keydown", closeModal);
            },
            onClose: () => {
                document.removeEventListener("keydown", closeModal);
            },
        }
    );
    template.show();
    function closeModal(e) {
        if (e.key === "Escape") {
            template.close()
        }
    }
})


console.log(galleryItems);
