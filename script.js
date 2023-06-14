"use strict";

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
const tabs = document.querySelectorAll(".quotes__tab");
const tabsContainer = document.querySelector(".quotes__tab--container");
const tabsContent = document.querySelectorAll(".quotes__content");
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".quotes__tab"); //selecting common parrent of elements insite the button

  //Guard clause
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("quotes__tab--active")); //removing active class from every tab

  clicked.classList.add("quotes__tab--active"); // adding class list to clicked element

  tabsContent.forEach((c) => c.classList.remove("quotes__content--active")); //remoivng active class from all components
  document
    .querySelector(`.quotes__content--${clicked.dataset.tab}`)
    .classList.add("quotes__content--active");
});
