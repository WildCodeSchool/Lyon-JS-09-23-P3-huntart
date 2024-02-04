const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation
  async create(user) {
    if (Object.keys(user).length === 0) {
      // Return an error about validation
      throw new Error("Validation failed: User object is empty");
    }

    const { pseudo, email, password } = user;
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (pseudo, email, password) VALUES (?, ?, ?)`,
      [pseudo, email, password]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(id, userUpdated) {
    const { pseudo, email, password } = userUpdated;
    await this.database.query(
      `UPDATE ${this.table} SET pseudo = ?, email = ?, password = ? WHERE id = ?`,
      [pseudo, email, password, id]
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID
  async destroy(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = UserManager;
