const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  find(id) {
    return this.connection.query(
      `select id, DATE_FORMAT(taken_date, '%Y/%m/%d') as taken_date, DATE_FORMAT(return_date, '%Y/%m/%d') as return_date, user_id, vehicle_id, completed from ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, DATE_FORMAT(taken_date, '%Y/%m/%d') as taken_date, DATE_FORMAT(return_date, '%Y/%m/%d') as return_date, user_id, vehicle_id, completed from  ${this.table}`
    );
  }

  insert(reservation) {
    return this.connection.query(
      `insert into ${this.table} (id, taken_date, return_date, user_id, vehicle_id) values (?, ?, ?, ?, ?)`,
      [
        reservation.id,
        reservation.taken_date,
        reservation.return_date,
        reservation.user_id,
        reservation.vehicle_id,
      ]
    );
  }

  update(reservation) {
    return this.connection.query(
      `update ${this.table} set taken_date = ?, return_date = ?, user_id = ? , vehicle_id = ? where id = ?`,
      [
        reservation.id,
        reservation.taken_date,
        reservation.return_date,
        reservation.user_id,
        reservation.vehicle_id,
      ]
    );
  }
}

module.exports = ReservationManager;
