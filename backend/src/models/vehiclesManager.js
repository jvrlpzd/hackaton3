const AbstractManager = require("./AbstractManager");

class VehiclesManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (brand, construction_date, mileage, technical_sheet, car_type, model, needs_repairing) WHERE id = ?
    VALUES(?,?,?,?,?,?,?)`,
      [
        vehicle.brand,
        vehicle.construction_date,
        vehicle.mileage,
        vehicle.technical_sheet,
        vehicle.car_type,
        vehicle.model,
        vehicle.needs_repairing,
        vehicle.id,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET brand = ?, construction_date = ?, mileage = ?, mileage = ?,
       technical_sheet = ?, car_type = ?, model = ?, needs_repairing = ? WHERE id = ? `,
      [
        vehicle.brand,
        vehicle.construction_date,
        vehicle.mileage,
        vehicle.technical_sheet,
        vehicle.car_type,
        vehicle.model,
        vehicle.needs_repairing,
        vehicle.id,
      ]
    );
  }
}

module.exports = VehiclesManager;
