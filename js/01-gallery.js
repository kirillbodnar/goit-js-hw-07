import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const itemsMarkUp = createGalleryElementMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", itemsMarkUp);

gallery.addEventListener("click", onGalleryElementClick);

function createGalleryElementMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
       alt="${description}"a
      />
    </a>
  </div>`;
    })
    .join("");
}

function onGalleryElementClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const FullScreenImgUrl = `<img src=${event.target.dataset.source} alt=${event.target.alt}>`;

  const instance = basicLightbox.create(FullScreenImgUrl);

  instance.show();

  window.addEventListener("keydown", onKeyboardCloseModal);

  function onKeyboardCloseModal(event) {
    if (event.code === "Escape" && instance.visible()) {
      instance.close();
    }
  }
}
