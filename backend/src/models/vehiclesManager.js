const AbstractManager = require("./AbstractManager");

class VehiclesManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (brand, construction_date, mileage, technical_sheet, car_type, model, city, fuel, needs_repairing)
    VALUES(?,?,?,?,?,?,?,?,?)`,
      [
        vehicle.brand,
        vehicle.construction_date,
        vehicle.mileage,
        vehicle.technical_sheet,
        vehicle.car_type,
        vehicle.model,
        vehicle.city,
        vehicle.fuel,
        vehicle.needs_repairing,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET brand = ?, construction_date = ?, mileage = ?, technical_sheet = ?, car_type = ?, model = ?, city = ?, fuel = ?, needs_repairing = ? WHERE id = ? `,
      [
        vehicle.brand,
        vehicle.construction_date,
        vehicle.mileage,
        vehicle.technical_sheet,
        vehicle.car_type,
        vehicle.model,
        vehicle.city,
        vehicle.fuel,
        vehicle.needs_repairing,
        vehicle.id,
      ]
    );
  }
}

module.exports = VehiclesManager;
