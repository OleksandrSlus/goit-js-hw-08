import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
;
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
function createGallery(galleryItems){
    return galleryItems.map(({preview, original, description} ) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"   />
    </a>
    </li>`).join('')
}
  const itemesCard = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemesCard )
const optionsEl = {captionData:'alt', captionDelay:'250'};
const gallery = new SimpleLightbox('.gallery__link', optionsEl);