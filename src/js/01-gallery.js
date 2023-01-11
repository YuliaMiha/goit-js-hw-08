import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onClickImage);

const createMarkUp = createImageMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", createMarkUp);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
function createImageMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}
function onClickImage(e) {
  e.preventDefault();
}