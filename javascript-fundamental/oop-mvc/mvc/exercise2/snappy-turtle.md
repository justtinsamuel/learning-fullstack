# Snappy Turtle Shop

![1](https://www.superturtle.co.th/glide/storage/banner/turtle-shop.jpg?h=350&fit=max&fm=jpg&t=1688191802)

## Summary

Pengusaha bernama VIncent mempunyai toko reptil khususnya kura-kura bernama **Snappy Turtle Shop**. Dia memiliki banyak jenis kura-kira baik dari spesies unik hingga spesies kura-kura darat. Vincent memiliki banyak `TurtleBox` yang terdiri dari beberapa jenis `Turtle`. Dia membutuhkan sebuah aplikasi untuk mengatur pergerakan penjualan dan pembelian dari toko.

## Flow

- `TurtleBox` merupakan class utama untuk pengaturan CRUD.

  - User bisa membuat `TurtleBox`.
  - User bisa menambahkan dan menghapus `Turtle` ke dalam `TurtleBox`

- `Turtle` merupakan class parent yang di gunakan oleh class turunan `SnappingTurtle`, `Tortoise`, `Terrapins`.

Berikut adalah _turtleboxes.json_ :

<dropdown>

```json
[
  {
    "id": 1,
    "boxName": "Snappy Garden",
    "turtles": [
      {
        "id": 1,
        "name": "Common Snapping Turtle",
        "species": "SnappingTurtle",
        "size": 10,
        "weight": 500,
        "price": 3500000,
        "patterns": ["brown", "blade"]
      },
      {
        "id": 2,
        "name": "Common Snapping Turtle",
        "species": "SnappingTurtle",
        "size": 5,
        "weight": 350,
        "price": 1500000,
        "patterns": ["brown", "blade"]
      }
    ]
  },
  {
    "id": 2,
    "boxName": "Land and Sea",
    "turtles": [
      {
        "id": 1,
        "name": "Sulcata",
        "species": "Tortoise",
        "size": 5,
        "weight": 750,
        "price": 1500000,
        "patterns": ["brown"]
      },
      {
        "id": 2,
        "name": "Red Eyed Slider Turtle",
        "species": "Terrapins",
        "size": 3,
        "weight": 200,
        "price": 500000,
        "patterns": ["red", "blade"]
      }
    ]
  }
]
```

</dropdown>

## Tasks

### Task 1 : Create Classes

a. Buatlah class `Turtle` sebagai class utama dengan attribute berikut:

- id
- name
- species - ada 3 family - `SnappingTurtle`, `Tortoise`, `Terrapins`
- price
- patternss - array

b. Buatlah class child `SnappingTurtle`, `Tortoise`, `Terrapins` dengan attribute sebagai berikut:

- size ()(cm)
- weight (gram)

### Task 2 :

Buatlah class `TurtleBox` sebagai class utama utk CRUD, dengan method sebagai berikut:

a. showBoxes()

    - Menampilkan boxes yang berisi kura-kura

    ```js
    /*
    Turtle boxes in our shop:
    1. Snappy Garden - 2 turtles
    2. Land and Sea - 2 turtles
    */
    ```

b. createBox(boxName)

    - Membuat turtle box baru
    - Tidak boleh membuat nama turtle box dengan nama yang sudah ada.

c. addTurtle(boxName, name, species, price, patterns, size, weight)

    - Memasukkan turtle ke dalam box berdasarkan name
    - Patterns by default langsung []
    - id turtle mengikuti tiap box

d. sellTurtle(boxName, id)

    - Menghapus turtle dari box berdasarkan id

e. countTotalPrice(boxName)

    - Menghitung total price dari sebuah box

f. boxDetail(boxName)

    - Menampilkan detail dari box berdasarkan dari boxName

    ```js
    /*
    "Snappy Garden" turtles are:
    1. Common Snapping Turtle - Rp. 3500000
    Species: SnappingTurtle, Size: 10cm, Weight: 500gr.
    Patterns: brown, and blade.
    2. Aligator Snapping Turtle - Rp. 1500000
    Species: SnappingTurtle, Size: 5cm, Weight: 350gr.
    Patterns: black, and blade.
    */
    ```

g. filterPerSpecies(species) - ada 3 species

---

**NOTES:**

Method bisa ditambahkan sesuai kebutuhan dari masing-masing analisa.

---

### 3. Apply commands

Berikut adalah command - command untuk aplikasi ini:

```bash
node index.js help
node index.js show
node index.js create <box_name>
node index.js add <box_name> <...turtles>
node index.js sell <box_name> <turtle_id>
node index.js countPrice <box_name>
node index.js detail <box_name>
node index.js filter <species>
```

1. `node index.js help`

- Memunculkan command - command yang ada dalam aplikasi ini

```bash
node index.js help

Result:
node index.js show
node index.js create <box_name>
node index.js add <box_name> <...turtles>
node index.js sell <box_name> <turtle_id>
node index.js countPrice <box_name>
node index.js detail <box_name>
node index.js filter <species>
```

2. `node index.js create <box_name>`

- Membuat turtle box menggunakan method _createBox_

```bash
node index create "first pond"

Result:
"first pond" box has been created.
```

3. `node index.js add <box_name> <...turtle>`

- Menambahkan turtle ke dalam box berdasarkan nama nya
- Urutan input turtle: name, species price, patterns, size, weight
- untuk Patterns jika tidak di isi by default []
- Untuk species jika tidak di isi by default SnappingTurtle
- Menggunakan method _addTurtle_

```bash
node index.js add "first pond" "Aligator Snapping Turtle" "SnappingTurtle" 150000 [] 5 175

Result:
"Aligator Snapping Turtle" has been added to "first pond" box.
```

4. `node index.js sell <>`

- Menghapus turtle dari box berdasarkan id nya

```bash
node index.js sell "first pond" 3

Result:
"Sulcata" has been sold from box "first pond"

Jika tidak ada id nya
Turtle not found.
```

5. `node index.js countPrice <box_name>`

- Menghitung total harga dari sebuah box berdasarkan nama

```bash
node index.js countPrice "first pond"

Result:
"first pond" is worth of Rp. 500000
```

6. `node index.js detail <b0x_name>`

- Menampilkan detail dari sebuah box

```bash

```

7. `node index.js show `

- Menampilkan semua box yang ada

```bash

```

8. `node index.js filter <species>`

- Mengelompokkan turtle berdasarkan species

```bash
node index.js filter Tortoise

Result:
These are our Tortoise collections: (2 in total)
1. Sulcata - Rp. 1500000, size: 5, weight: 500
2. Sulcata - Rp. 500000, size: 3, weigth: 350
```

---

**CARA MENGEERJAKAN DAN MENGUMPULKAN TUGAS**

1. Git clone repository
2. Buat branch baru
3. Kerjakan di branch masing-masing
4. Add, Commit, Push
5. Pull Request

---