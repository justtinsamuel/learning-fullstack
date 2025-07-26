const { Chocolate, Sweet, Strawberry } = require(`./cookie`);

// FACTORY CLASS
class Kitchen {
  // Kitchen memiliki sebuah CONTAINER
  constructor(container = []) {
    this.container = container;
  }

  // METHOD, untuk CREATE.
  bake(name, price, ingredients, type, isSweet = false) {
    // Generate ID
    let id =
      this.container.length === 0
        ? 1
        : this.container[this.container.length - 1].id + 1;

    // Switch Case to PUSH to Container
    switch (type.toLowerCase()) {
      case "chocolate":
        this.container.push(
          new Chocolate(id, name, price, ingredients, isSweet)
        );
        break;
      case "sweet":
        this.container.push(new Sweet(id, name, price, ingredients, isSweet));
        break;
      case "strawberry":
        this.container.push(
          new Strawberry(id, name, price, ingredients, isSweet)
        );
        break;
      default:
        console.log(`Wrong Input: ${type} is not a valid cookie type.`);
    }
    console.log(`New ${name} available!`);
    
  }

  // METHOD, untuk DELETE.
  eat(id) {
    this.container = this.container.filter(
      (cookie) => cookie.id !== id
    );
  }

  // METHOD, untuk UPDATE.
  addSugar(id) {
    this.container = this.container.map((thisCookie) => {
      if (thisCookie.id === id) {
        thisCookie.isSweet = true;
      }
      return thisCookie;
    });
    console.log(`This Cookie with id ${id} is now as sweet as you.`);
    
  }

  // METHOD, untuk READ.
  showCookie() {
    console.log(`Here are the list of your Cookie:`);

    if (this.container.length === 0) {
      console.log(`Currently there is nothing here!`);
    } else {
      this.container.forEach((item) => {
        const { id, name, price, ingredients, type, isSweet } = item;
        console.log(
          `${id}. ${name}, ${price}, ${ingredients}, ${type}, ${isSweet}`
        );
      });
    }
    console.log(
      `________________________________________________________________`
    );
  }

  showCookieTable() {
    console.table(this.container);
  }

  showIngredients() {
    if (this.container.length === 0) {
      console.log(`No cookies available.`);
      return;
    }

    console.log(`Ingredients per cookie:`);
    this.container.forEach((cookie) => {
      console.log(`${cookie.name}: ${cookie.ingredients.join(", ")}`);
    });
  }

  addIngredient(id, newIngredient) {
    const targetCookie = this.container.find((cookie) => cookie.id === id);

    if (!targetCookie) {
      console.log(`Cookie with ID ${id} not found.`);
      return;
    }

    // Cek apakah bahan sudah ada agar tidak duplikat
    if (targetCookie.ingredients.includes(newIngredient)) {
      console.log(`${newIngredient} already exists in ${targetCookie.name}.`);
      return;
    }

    // Tambahkan bahan baru
    targetCookie.ingredients.push(newIngredient);
    console.log(`${newIngredient} added to ${targetCookie.name}.`);
  }

  filterByIngredient(ingredient) {
    const matchedCookies = this.container.filter((cookie) =>
      cookie.ingredients.includes(ingredient)
    );

    if (matchedCookies.length === 0) {
      console.log(`No cookies contain the ingredient: ${ingredient}`);
      return;
    }

    console.log(`Cookies with ingredient "${ingredient}":`);
    matchedCookies.forEach((cookie) => {
      console.log(
        `${cookie.id}. ${cookie.name} - [${cookie.ingredients.join(", ")}]`
      );
    });
  }

  sortByPrice(order = "asc") {
    if (this.container.length === 0) {
      console.log("No cookies to sort.");
      return;
    }

    const sorted = [...this.container].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });

    console.log(`Cookies sorted by price (${order}):`);
    sorted.forEach((cookie) => {
      console.log(`${cookie.id}. ${cookie.name} - Rp${cookie.price}`);
    });
  }

  groupByType() {
    if (this.container.length === 0) {
      console.log("No cookies to categorize.");
      return;
    }

    const grouped = {};

    this.container.forEach((cookie) => {
      if (!grouped[cookie.type]) {
        grouped[cookie.type] = [];
      }
      grouped[cookie.type].push(cookie);
    });

    console.log("Cookies grouped by type:");
    for (let type in grouped) {
      console.log(`\nType: ${type}`);
      grouped[type].forEach((cookie) => {
        console.log(
          `- ${cookie.name} (ID: ${cookie.id}, Price: ${cookie.price})`
        );
      });
    }
  }

  clearCookies() {
  this.container = [];
  console.log("All cookies have been cleared.");
}
}
module.exports = Kitchen;
