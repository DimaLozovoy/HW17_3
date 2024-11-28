// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
// Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
// Замініть клас на заголовку.
// Перевірте чи містить посилання клас list
const refs = {
  currentDom: document,
  currentBody: document.body,
  bodyDiv: document.querySelector("div"),
  bodyTitle: document.querySelector("h1"),
  list: document.querySelector("ul"),
  //   fLink: document.querySelector("http:/google.com"),
  //   lLink: document.querySelector("http://internal.com/test"),
  allLinks: document.querySelectorAll("a"),
};
// refs.allLinks.classList = "Super";
// refs.allLinks.textContent = "Haha";

// refs.allLinks.style.backgroundColor = "blue";
// refs.allLinks.style.fontSize = "72px";
// refs.fLink.textContent = "ya posilannia";
refs.allLinks.style.color = "orange";
refs.allLinks.firstElementChild.classList.add("styles");
refs.allLinks.lastElementChild.classList.add("styles");
refs.bodyTitle.textContent = "I`m the storm that is APPROACHIIIIIING";
refs.bodyTitle.classList.add("coolTitle");
// console.log(refs.currentBody);
// console.log(refs.currentBody.childNodes);
// console.log(refs.divTitle);
// console.log(refs.list.children);
// console.log(refs.list.firstElementChild);
// console.log(refs.allLinks);
