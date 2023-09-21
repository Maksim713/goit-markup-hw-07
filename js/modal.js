(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    disablePageScroll(); // Отключаем прокрутку страницы
    checkScrollbar(); // Проверка наличия полосы прокрутки при открытии.
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    enablePageScroll(); // Включаем прокрутку страницы
  }

  const modalContent = refs.modal.querySelector(".modal-content");

  function checkScrollbar() {
    const isMobile = window.innerWidth <= 767;
    if (isMobile) {
      modalContent.style.overflowY = "scroll";
    } else {
      modalContent.style.overflowY = "hidden";
    }
  }

  window.addEventListener("resize", checkScrollbar);

  function disablePageScroll() {
    document.body.style.overflow = "hidden";
  }

  function enablePageScroll() {
    document.body.style.overflow = "auto";
  }
})();
