export function dropDown1() {
  const dropDownButtons = document.querySelectorAll(".drop-down-1__btn");

  function closeAllDropdowns() {
    dropDownButtons.forEach(button => {
      button.classList.remove("active");
    });
  }

  function handleButtonClick(event) {
    const button = event.target.closest(".drop-down-1__btn");
    if (!button) return;

    const dropDown = button.closest(".drop-down-1");
    const list = dropDown.querySelector(".drop-down-1__list");
    const isActive = button.classList.contains("active");

    // Закрыть все другие списки
    closeAllDropdowns();

    // Переключение активного состояния
    if (!isActive) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }

  function handleDocumentClick(event) {
    const isInsideDropdown = event.target.closest(".drop-down-1");
    if (!isInsideDropdown) {
      closeAllDropdowns();
    }
  }

  function handleEscKey(event) {
    if (event.key === "Escape") {
      closeAllDropdowns();
    }
  }

  function handleScroll() {
    closeAllDropdowns();
  }

  function handleLabelClick(event) {
    const label = event.target.closest("label");
    if (!label) return;

    const dropdown = label.closest(".drop-down-1");
    const button = dropdown.querySelector(".drop-down-1__btn");
    const span = button.querySelector("span");
    const radioInput = label.querySelector("input");
    const labelValue = label.querySelector("i").textContent;

    // Установить состояние checked для выбранного radio
    radioInput.checked = true;

    // Установить текст в span кнопки
    span.textContent = labelValue;

    // Закрыть выпадающий список
    button.classList.remove("active");
  }

  // Сравнение текста в <span> кнопки с <i> в label
  dropDownButtons.forEach(button => {
    const dropdown = button.closest(".drop-down-1");
    const span = button.querySelector("span");
    const listItems = dropdown.querySelectorAll("label");

    listItems.forEach(label => {
      const input = label.querySelector("input");
      const value = label.querySelector("i").textContent;

      if (span.textContent === value) {
        input.checked = true;
      }
    });
  });

  // Добавление слушателей
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleEscKey);
  window.addEventListener("scroll", handleScroll);

  dropDownButtons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
  });

  document.querySelectorAll(".drop-down-1__list label").forEach(label => {
    label.addEventListener("click", handleLabelClick);
  });
};
