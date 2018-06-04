const loadDatabase = (localStorageKey) => {
  const databaseString = localStorage.getItem(localStorageKey);
  return JSON.parse(databaseString);
}

const inventory = loadDatabase("HomeInventory");
const fragment = document.createDocumentFragment();
const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getAllThings = () => {
  for (key in inventory) {
    inventory[key].forEach(thing => {
      const section = document.createElement("section");
      for (prop in thing) {
        const paragraph = document.createElement("p");
        paragraph.textContent = `${capitalizeFirst(prop)}: ${thing[prop]}`;
        section.appendChild(paragraph);
      }
      fragment.appendChild(section);
    });
  }
  const article = document.querySelector("#myThings");
  article.appendChild(fragment);
}

getAllThings();

