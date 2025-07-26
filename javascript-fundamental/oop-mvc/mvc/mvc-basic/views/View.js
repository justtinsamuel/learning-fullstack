class View {
  static show(coffes) {
    // Display the coffee data in a table format.

    if (!coffes || coffes.length === 0) {
      console.log("No coffee data available.");
      return;
    } else {
      console.log("Coffee data loaded successfully.");
      console.table(coffes);
      return;
    }
  }
}

module.exports = View;
