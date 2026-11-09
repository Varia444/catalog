document.addEventListener("DOMContentLoaded", () => {
  // Находим все кнопки фильтров, все карточки товаров и блок "Ничего не найдено"
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productItems = document.querySelectorAll(".product-item");
  const noResults = document.getElementById("no-results");
  const catalogSection = document.getElementById("catalog");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Получаем значение фильтра из атрибута data-filter
      const filterValue = btn.getAttribute("data-filter");
      let visibleCount = 0;

      // Проходимся по всем товарам и скрываем/показываем их
      productItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "flex";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      });

      // Если не найдено ни одного товара, показываем заглушку
      if (visibleCount === 0) {
        noResults.classList.remove("hidden");
        noResults.classList.add("flex");
      } else {
        noResults.classList.add("hidden");
        noResults.classList.remove("flex");
      }

      // Если кликнули на блок коллекций сверху, плавно скроллим вниз к каталогу
      if (btn.closest("#collections")) {
        catalogSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
