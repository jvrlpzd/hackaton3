DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS vehicle;
DROP TABLE IF EXISTS reservation;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(500),
  license VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE vehicle (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    car_type VARCHAR(100) NOT NULL,
    construction_date DATE NOT NULL,
    mileage VARCHAR(100) NOT NULL,
    technical_sheet VARCHAR(500) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE reservation (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  taken_date DATE NOT NULL,
  return_date DATE NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT FK_user_reservation FOREIGN KEY (user_id) REFERENCES user(id),
  vehicle_id INT NOT NULL,
  CONSTRAINT FK_vehicle_reservation FOREIGN KEY (vehicle_id) REFERENCES vehicle(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;