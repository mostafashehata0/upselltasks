// add active class to choosen page
const pages = document.querySelectorAll(".pages");
pages.forEach((item) => {
  item.addEventListener("click", () => {
    pages.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
