import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');
galleryListRef.addEventListener('click', onOpenModal);

const galleryMark = creatGalleryMark(galleryItems);
galleryListRef.insertAdjacentHTML('beforeend', galleryMark);

function creatGalleryMark(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" 
            href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}" />
          </a>
  `;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {});

// var lightbox = new SimpleLightbox('.gallery a', {});

function onOpenModal(event) {
    event.preventDefault();
    // var event = $('.gallery a').simpleLightbox(link.alt);
    // var gallery = $('.gallery a').simpleLightbox();
}
