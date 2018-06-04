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
  for (key in inventory) { // goes through each category (e.g. furniture)
    const heading = document.createElement("h2");
    heading.textContent = `${capitalizeFirst(key)}`;
    fragment.appendChild(heading);

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
  const article = document.querySelector("#myThings");
  article.appendChild(fragment);
}

// getAllThings();

const getSomeThings = (category) => {
  const heading = document.createElement("h2");
  heading.textContent = `${capitalizeFirst(category)}`;
  fragment.appendChild(heading);

  inventory[category].forEach(thing => { // goes through each thing in category
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

const article = document.querySelector("#myThings");
article.appendChild(fragment);
}

const getThings = (parameter) => {
  if (parameter === undefined) {
    getAllThings();
  } else {
    getSomeThings(parameter);
  }
}

getThings();