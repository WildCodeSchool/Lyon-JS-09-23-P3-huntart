// Import database client
const database = require("../../database/client");

class AbstractManager {
  constructor({ table }) {
    this.table = table;

    this.database = database;
  }
}

// Ready to export
module.exports = AbstractManager;
