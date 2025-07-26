class View {
  static showHelp() {
    console.log(`
Turtle Box Commands:
  node index.js help => Menampilkan bantuan perintah.
  node index.js show => Menampilkan semua turtle box.
  node index.js create <boxName> => Membuat turtle box baru.
  node index.js add <boxId> <name> <species> <size> <weight> <price> <pattern1,pattern2,...>  => Menambahkan turtle ke dalam box.
  node index.js sell <boxId> <turtleId> => Menjual turtle dari box.
  node index.js countPrice <boxId>  => Menampilkan total nilai semua turtle di box.
  node index.js detail <boxId> => Menampilkan detail isi box.
  node index.js filter <species>  => Menampilkan semua turtle dari spesies tertentu.
`);
  }

  static message(msg) {
    console.log(msg);
  }

  static showBoxes(boxes) {
    console.log(`Welcome to Turtle Box! Ini daftar box yang tersedia:`);

    if (boxes.length === 0) {
      console.log("Belum ada box yang tersedia.");
      return;
    }

    boxes.forEach((box) => {
      console.log(`${box.id}. ${box.boxName} has ${box.turtles.length} turtle`);
    });
  }

  static showBoxDetail(box) {
    console.log(`Detail Box: ${box.boxName} (ID: ${box.id})`);
    if (box.turtles.length === 0) {
      console.log("Tidak ada turtle di box ini.");
    } else {
      box.turtles.forEach((turtle, i) => {
        console.log(
          `${turtle.id}. ${turtle.name} | ${turtle.species} | Size: ${turtle.size} | Weight: ${turtle.weight}g | Price: Rp${turtle.price}`
        );
        console.log(`Pattern: ${turtle.patterns.join(", ")}`);
      });
    }
  }

  static showTotalPrice(total) {
    console.log(`Total Price: Rp${total}`);
  }

  static showFilteredTurtles(species, turtles) {
    console.log(`Sort Turtle by species: ${species}`);
    if (turtles.length === 0) {
      console.log(`there is no turtle ${species}.`);
    } else {
      turtles.forEach((turtle) => {
        console.log(
          `${turtle.id}. ${turtle.name} | ${turtle.species} | Rp${turtle.price}`
        );
      });
    }
  }

  static showFilteredTurtles(filteredData, species) {
    console.log(`\n🔍 Turtle dengan species "${species}":\n`);

    filteredData.forEach((entry) => {
      console.log(`📦 Box ID ${entry.boxId} - ${entry.boxName}:`);
      entry.turtles.forEach((turtle, index) => {
        console.log(
          `  ${index + 1}. ${turtle.name} - ${
            turtle.species
          } - Rp${turtle.price.toLocaleString("id-ID")}`
        );
      });
      console.log("");
    });
  }
}

module.exports = View;
