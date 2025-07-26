class View {
  static show(Wines) {
    console.log(`Welcome to Wine Management!`);
    console.table(Wines);
  }

  static showHelp() {
    console.log(`Wine Management Commands:
    - node app.js
    - node app.js help
    - node app.js wines:
    - node app.js add <wine name/year/type>
    - node app.js sell <wine id>
    - node app.js rename <wine id/new name>
    - node app.js findById <wine id>
    `);
  }

  static message(msg) {
    console.log(msg);
  }
}

module.exports = View;
