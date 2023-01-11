const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, phone, password, profil_picture, role, license) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.password,
        user.profil_picture,
        user.role,
        user.license,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, phone = ?, password = ?, profil_picture = ?, role = ?, license = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.password,
        user.profil_picture,
        user.role,
        user.license,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
