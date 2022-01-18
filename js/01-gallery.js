import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryListRef = document.querySelector('.gallery');

const galleryCard = ({ preview, original, description }) => {
    const wrapperGallery = document.createElement('div');
    wrapperGallery.innerHTML = `
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
    return wrapperGallery;
};

const galleryCards = galleryItems.map(galleryItem => galleryCard(galleryItem));
galleryListRef.append(...galleryCards);
