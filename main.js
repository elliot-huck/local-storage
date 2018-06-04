const HomeInventoryDatabase = {};

HomeInventoryDatabase.furniture = [];
HomeInventoryDatabase.electronics = [];
HomeInventoryDatabase.stuff = [];

const ottoman = {
  name: "The Ottoman Emperor",
  location: "Living room",
  description: "This ottoman is basically the best ottoman ever: it is large and soft, looks nice, and can be used for so many things"
}
HomeInventoryDatabase.furniture.push(ottoman);

const television = {
  name: "Old television",
  location: "Living room",
  description: "Whenever you turn this old piece of junk on, it will keep trying to turn itself off again until you make it clear that you aren't going to give up"
}
HomeInventoryDatabase.electronics.push(television);

const fishbowl = {
  name: "Fido's fishbowl",
  location: "Living room",
  description: "This sleek, modern fishbowl is the home of my betta fish, Fido"
}
HomeInventoryDatabase.stuff.push(fishbowl);

const desktop = {
  name: "Rachel's computer",
  location: "Bonus room",
  description: "Once a useful device for mooching Netflix off of Rachel's old roommate, this desktop computer is now primarily used when Rachel is on call for work or editing photos"
}
HomeInventoryDatabase.electronics.push(desktop);

const table = {
  name: "Family heirloom table",
  location: "Dining room",
  description: "This table has been in the family for three generations. It is very old and is falling apart. Because it is very old, my mom acts like it will last forever. Because it is falling apart, I act like it won't"
}
HomeInventoryDatabase.furniture.push(table);

const saveDatabase = (databaseObject, localStorageKey) => {
  const stringifiedDatabase = JSON.stringify(databaseObject);
  localStorage.setItem(localStorageKey, stringifiedDatabase);
}

saveDatabase(HomeInventoryDatabase, "HomeInventory");