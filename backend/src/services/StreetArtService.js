const AbstractManager = require("../models/AbstractManager");

class StreetArtService extends AbstractManager {
  constructor() {
    super({ table: "streetArt" });
  }

  async getStreetArtById(id) {
    return this.read(id);
  }

  async getAllStreetArt() {
    return this.readAll();
  }
}

module.exports = StreetArtService;
