const loadDatabase = (localStoragecategory) => {
  const databaseString = localStorage.getItem(localStoragecategory);
  return JSON.parse(databaseString);
}

const inventory = loadDatabase("HomeInventory");
const fragment = document.createDocumentFragment();
const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const makeSectionHeading = (headText) => {
  const heading = document.createElement("h2");
  heading.textContent = `${capitalizeFirst(headText)}`;
  fragment.appendChild(heading);
}

const makeSection = (key) => {
  inventory[key].forEach(thing => { // goes through each thing in category
    const section = document.createElement("section");
    for (prop in thing) { // goes through all properties of a thing
      const paragraph = document.createElement("p");
      let placeholder = `${capitalizeFirst(prop)}: `
      if (prop === "name") {
        paragraph.style.fontWeight = "bold";
        paragraph.style.textDecoration = "underline";
        placeholder = "";
      }
      paragraph.textContent = `${placeholder}${thing[prop]}`;
      section.appendChild(paragraph);
    }
    fragment.appendChild(section);
  });
}

const writeFragment = () => {
  const article = document.querySelector("#myThings");
  article.appendChild(fragment);
}

const getAllThings = () => {
  for (category in inventory) { // goes through each category (e.g. furniture)
    makeSectionHeading(category);
    makeSection(category);
  }
  writeFragment();
  
}

const getSomeThings = (category) => {
  makeSectionHeading(category);
  makeSection(category);
  writeFragment();
}

const getThings = (parameter) => {
  if (parameter === "") {
    getAllThings();
  } else {
    getSomeThings(parameter);
  }
}

getThings("furniture");