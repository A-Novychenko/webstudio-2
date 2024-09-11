const openBtnRef = document.querySelector("[data-open-modal]");
const closeBtnRef = document.querySelector("[data-close-modal]");
const backdropRef = document.querySelector("[data-backdrop]");

openBtnRef.addEventListener("click", openModal);

function onCloseEsc(e) {
  if (e.code !== "Escape") return;

  closeModal();
}

function openModal() {
  backdropRef.classList.remove("is-hidden");
  document.addEventListener("keydown", onCloseEsc);
  closeBtnRef.addEventListener("click", closeModal);
  backdropRef.addEventListener("click", closeModal);
}

function closeModal() {
  backdropRef.classList.add("is-hidden");
  closeBtnRef.removeEventListener("click", openModal);
  backdropRef.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", onCloseEsc);
}
