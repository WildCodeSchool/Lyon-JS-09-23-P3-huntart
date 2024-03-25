const AbstractManager = require("./AbstractManager");

class StreetArtManager extends AbstractManager {
  constructor() {
    super({ table: "streetArt" });
  }

  // The C of CRUD - Create operation
  async create(streetArt) {
    if (Object.keys(streetArt).length === 0) {
      throw new Error("Validation failed: Street art object is empty");
    }

    const { name, linkImage, description } = streetArt;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, linkImage, description) VALUES (?, ?, ?)`,
      [name, linkImage, description]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  // The U of CRUD - Update operation

  async update(id, streetArtUpdated) {
    const { name, linkImage, description } = streetArtUpdated;
    await this.database.query(
      `UPDATE ${this.table} SET name = ?, linkImage = ?, description = ? WHERE id = ?`,
      [name, linkImage, description, id]
    );
  }

  // The D of CRUD - Delete operation
  async destroy(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = StreetArtManager;
