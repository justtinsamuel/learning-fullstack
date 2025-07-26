const fs = require("fs");

// ENUM
const SPECIES = {
  SNAPPING: "SnappingTurtle",
  TORTOISE: "Tortoise",
  TERRAPINS: "Terrapins",
};

class Turtle {
  static speciesList = Object.values(SPECIES);

  constructor(id, name, species, price, patterns) {
    if (!Turtle.speciesList.includes(species)) {
      throw new Error(`Invalid species: ${species}`);
    }

    this.id = +id;
    this.name = name;
    this.species = species;
    this.price = +price;
    this.patterns = Array.isArray(patterns) ? patterns : [patterns];
  }
}

class SnappingTurtle extends Turtle {
  constructor(id, name, price, patterns, size, weight) {
    super(id, name, SPECIES.SNAPPING, price, patterns);
    this.size = +size;
    this.weight = +weight;
  }
}

class Tortoise extends Turtle {
  constructor(id, name, price, patterns, size, weight) {
    super(id, name, SPECIES.TORTOISE, price, patterns);
    this.size = +size;
    this.weight = +weight;
  }
}

class Terrapins extends Turtle {
  constructor(id, name, price, patterns, size, weight) {
    super(id, name, SPECIES.TERRAPINS, price, patterns);
    this.size = +size;
    this.weight = +weight;
  }
}

// Mapping for species -> class
const TurtleClassMap = {
  [SPECIES.SNAPPING]: SnappingTurtle,
  [SPECIES.TORTOISE]: Tortoise,
  [SPECIES.TERRAPINS]: Terrapins,
};

class TurtleBox {
  constructor(id, boxName, turtles = []) {
    this.id = +id;
    this.boxName = boxName;
    this.turtles = turtles;
  }

  // ------- Static Logic -------
  static getBoxes() {
    const data = fs.readFileSync("data.json", "utf-8");
    const rawBoxes = JSON.parse(data);
    return this.parseBoxes(rawBoxes);
  }

  static saveBoxes(boxes) {
    const plainData = boxes.map((box) => ({
      id: box.id,
      boxName: box.boxName,
      turtles: box.turtles,
    }));
    fs.writeFileSync("data.json", JSON.stringify(plainData, null, 2));
  }

  static parseBoxes(rawBoxes) {
    return rawBoxes.map((box) => {
      const turtles = box.turtles.map((t) => {
        const TurtleClass = TurtleClassMap[t.species];
        return new TurtleClass(
          t.id,
          t.name,
          t.price,
          t.patterns,
          t.size,
          t.weight
        );
      });
      return new TurtleBox(box.id, box.boxName, turtles);
    });
  }

  static createBox(boxName) {
    const boxes = this.getBoxes();
    const newId =
      boxes.length > 0 ? Math.max(...boxes.map((b) => b.id)) + 1 : 1;
    const newBox = new TurtleBox(newId, boxName, []);
    boxes.push(newBox);
    this.saveBoxes(boxes);
  }

  static createBoxes(boxName) {
    const data = this.getBoxes();

    if (!boxName || boxName.trim() === "") {
      throw new Error("Nama box tidak boleh kosong.");
    }

    const lastId = data.length > 0 ? data[data.length - 1].id : 0;
    const newBox = {
      id: lastId + 1,
      boxName,
      turtles: [],
    };

    data.push(newBox);
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
  }

  static addTurtle(boxId, turtleData) {
    const boxes = this.getBoxes();
    const box = boxes.find((b) => b.id === +boxId);
    if (!box) throw new Error(`Box with ID ${boxId} not found.`);

    const TurtleClass = TurtleClassMap[turtleData.species];
    if (!TurtleClass) throw new Error(`Unknown species: ${turtleData.species}`);

    const newId =
      box.turtles.length > 0
        ? Math.max(...box.turtles.map((t) => t.id)) + 1
        : 1;

    const newTurtle = new TurtleClass(
      newId,
      turtleData.name,
      turtleData.price,
      turtleData.patterns,
      turtleData.size,
      turtleData.weight
    );

    box.turtles.push(newTurtle);
    this.saveBoxes(boxes);
  }

  static showBoxes() {
    const boxes = this.getBoxes();
    console.log("\nTurtle Boxes in the shop:");
    boxes.forEach((box) => {
      console.log(
        `  ${box.id}. ${box.boxName} - ${box.turtles.length} turtles`
      );
    });
  }

  static sellTurtle(boxId, turtleId) {
    const boxes = this.getBoxes();
    const box = boxes.find((b) => b.id === +boxId);
    if (!box) throw new Error(`Box with ID ${boxId} not found.`);

    const turtleIndex = box.turtles.findIndex((t) => t.id === +turtleId);
    if (turtleIndex === -1)
      throw new Error(`Turtle with ID ${turtleId} not found in box ${boxId}.`);

    const soldTurtle = box.turtles.splice(turtleIndex, 1)[0];
    this.saveBoxes(boxes);
    console.log(
      `✅ Sold turtle: ${soldTurtle.name} (ID ${soldTurtle.id}) from Box ${box.boxName}`
    );
  }

  static countTotalPrice(boxId) {
    const boxes = this.getBoxes();
    const box = boxes.find((b) => b.id === +boxId);
    if (!box) throw new Error(`Box with ID ${boxId} not found.`);

    const total = box.turtles.reduce((sum, t) => sum + t.price, 0);
    return { boxName: box.boxName, totalPrice: total };
  }

  static boxDetail(boxId) {
    const boxes = this.getBoxes();
    const box = boxes.find((b) => b.id === +boxId);
    if (!box) throw new Error(`Box with ID ${boxId} not found.`);

    console.log(`\n📦 Box #${box.id}: ${box.boxName}`);
    if (box.turtles.length === 0) {
      console.log("  (No turtles inside)");
    } else {
      box.turtles.forEach((turtle) => {
        console.log(`  🐢 [${turtle.id}] ${turtle.name} | ${turtle.species}`);
        console.log(`     Price: Rp${turtle.price.toLocaleString("id-ID")}`);
        console.log(`     Size: ${turtle.size}cm | Weight: ${turtle.weight}g`);
        console.log(`     Patterns: ${turtle.patterns.join(", ")}`);
      });
    }
  }

  static filterBySpecies(speciesName) {
    const boxes = this.getBoxes();
    const result = [];

    for (const box of boxes) {
      const matchedTurtles = box.turtles.filter(
        (t) => t.species.toLowerCase() === speciesName.toLowerCase()
      );

      if (matchedTurtles.length > 0) {
        result.push({
          boxId: box.id,
          boxName: box.boxName,
          turtles: matchedTurtles,
        });
      }
    }

    return result;
  }
}

module.exports = {
  Turtle,
  TurtleBox,
  SnappingTurtle,
  Tortoise,
  Terrapins,
};
