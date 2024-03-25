const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // The C of CRUD - Create operation
  async create(user) {
    if (Object.keys(user).length === 0) {
      throw new Error("Validation failed: User object is empty");
    }

    const { pseudo, email, password } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (pseudo, email, password) VALUES (?, ?, ?)`,
      [pseudo, email, password]
    );

    return result.insertId;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `select email from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
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

  async update(id, userUpdated) {
    const { pseudo, email, password } = userUpdated;
    await this.database.query(
      `UPDATE ${this.table} SET pseudo = ?, email = ?, password = ? WHERE id = ?`,
      [pseudo, email, password, id]
    );
  }

  // The D of CRUD - Delete operation
  async destroy(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = UserManager;
