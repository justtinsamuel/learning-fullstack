// Create Class and Inheritance.
space = () => {
  console.log(`\n`);
};

// CLASS Fruit
class Fruit {
  constructor(id, name, price, stock, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }
}

// INHERITANCE dari Fruit = CREATE OBJECT
class Apple extends Fruit {
  constructor(id, name, price, stock) {
    super(id, name, price, stock, "Apple");
  }
}

class Pinaple extends Fruit {
  constructor(id, name, price, stock) {
    super(id, name, price, stock, "Pinaple");
  }
}

class Grape extends Fruit {
  constructor(id, name, price, stock) {
    super(id, name, price, stock, "Grape");
  }
}

// Factory Class
class TokoBuah {
  // Lemari Toko Buah
  constructor(shelves) {
    this.shelves = shelves || [];
  }
  // Untuk Show All Items
  showItems() {
    console.log(`Your Shelves:`);

    // Loop Show All Items. shelf di redefined dari constructor.
    if (this.shelves.length > 0) {
      this.shelves.forEach((shelf) => {
        const { id, name, price, stock, category } = shelf;
        console.log(`${id}. ${name}, Rp. ${price}`);
        console.log(`Stocks = ${stock} pcs. Category = ${category}`);
      });
      console.log(`_____________________________`);

      // Kalau masih belum ada Item show ini:
    } else {
      console.log(`There is no Item`);
    }
  }

  // provide data table
  showItemsInTable() {
    console.table(this.shelves);
  }

  // tambah item.
  addItems(name, price, stock, category) {
    // untuk generate ID dari awal.
    let id;
    if (this.shelves.length === 0) {
      id = 1;
    } else {
      let lastIndex = this.shelves.length - 1;
      id = this.shelves[lastIndex].id + 1;
    }

    // untuk pisahkan kategori yg dapat diinput.
    switch (category) {
      case "Apple":
        this.shelves.push(new Apple(id, name, price, stock));
        break;

      case "Pinaple":
        this.shelves.push(new Pinaple(id, name, price, stock));
        break;

      case "Grape":
        this.shelves.push(new Grape(id, name, price, stock));
        break;
      default:
        console.log(
          `Silakan masukan barang sesuai kategori yang tersedia saat ini:`
        );
    }
  }

  // Delete, tapi ini hanya karena object statis saja. Overwrite aja, karena belum pakai DB gak bisa beneran Delete.
  deleteItems(id) {
    this.shelves = this.shelves.filter((shelf) => shelf.id !== id);
  } 

  // Update data.
  editItem(id, name, price, stock){
    this.shelves = this.shelves.map(shelf => {
        if (shelf.id === id){
            shelf.name = name;
            shelf.price = price;
            shelf.stock = stock;
        }
        return shelf;
    })
  }
}

const rumahbuah = new TokoBuah([]);
rumahbuah.showItems();
space();

rumahbuah.addItems("Apel Fuji", 32000, 5, "Apple");
rumahbuah.addItems("Nanas Pemalang", 15000, 10, "Pinaple");
rumahbuah.addItems("Anggur Baru", 99000, 2, "Grape");
rumahbuah.showItems();
space();

rumahbuah.showItemsInTable();
space();

rumahbuah.deleteItems(2);
rumahbuah.showItemsInTable();

space();
rumahbuah.editItem(3, 'Anggur Hijau', 28000, 15);
rumahbuah.showItemsInTable();