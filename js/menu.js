const openMenuBtnRef = document.querySelector("[data-open-menu]");
const closeMenuBtnRef = document.querySelector("[data-close-menu]");
const menuRef = document.querySelector("[data-menu]");

openMenuBtnRef.addEventListener("click", openMenu);

menuRef.addEventListener("click", closeMenuOnClickLink);

function openMenu(e) {
  menuRef.classList.add("is-open");
  closeMenuBtnRef.addEventListener("click", closeMenu);
}

function closeMenu(e) {
  closeMenuBtnRef.removeEventListener("click", closeMenu);
  menuRef.classList.remove("is-open");
}

function closeMenuOnClickLink(e) {
  if (e.target.tagName === "A") {
    closeMenu();
  }
}
