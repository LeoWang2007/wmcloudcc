setInterval(() => {
  const show = document.querySelector("span[data-show]");
  const next =
    show.nextElementSibling || document.querySelector("span:first-child");
  const wait =
    next.nextElementSibling || document.querySelector("span:first-child");
  const up = document.querySelector("span[data-up]");

  // up->none
  if (up) up.removeAttribute("data-up");

  // show->up
  show.removeAttribute("data-show");
  show.setAttribute("data-up", "");

  // next->show
  next.removeAttribute("data-down");
  next.setAttribute("data-show", "");

  // wait->next
  wait.setAttribute("data-down", "");
}, 2000);

const convertStyle = () => {
  const height = window.innerHeight;
  Array.from(document.getElementsByTagName("section")).forEach((element) => {
    element.style.height = `${height}px`;
  });
};
window.addEventListener("resize", convertStyle);
window.addEventListener("DOMContentLoaded", convertStyle);