import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryListRef = document.querySelector('.gallery');
galleryListRef.addEventListener('click', onOpenModal);

const galleryMark = creatGalleryMark(galleryItems);
galleryListRef.insertAdjacentHTML('beforeend', galleryMark);

function creatGalleryMark(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
        })
        .join('');
}

function onOpenModal(event) {
    event.preventDefault();

    const item = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src = '${item}'>`);

    instance.show();
}
