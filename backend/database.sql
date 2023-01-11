DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS vehicle;
DROP TABLE IF EXISTS reservation;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(500),
  license VARCHAR(100) UNIQUE NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
  user (firstname, lastname, email, phone, password, license)
VALUES
  (
    'Chloe',
    'Bidau',
    'chloe@bidau',
    '0673928170',
    'toto',
    '1A2B3C4D5E6F7G0'
  ),
  (
    'Doroteya',
    'Donova',
    'doroteya@donova',
    '0673928171',
    'toto',
    '1A2B3C4D5E6F7G1'
  ),
  (
    'Ryan',
    'Beaujot',
    'ryan@beaujot',
    '0673928172',
    'toto',
    '1A2B3C4D5E6F7G2'
  ),
  (
    'Matthieu',
    'George',
    'matthieu@george',
    '0673928173',
    'toto',
    '1A2B3C4D5E6F7G3'
  ),
  (
    'Javier',
    'Lopez',
    'javier@lopez',
    '0673928174',
    'toto',
    '1A2B3C4D5E6F7G4'
  ),
  (
    'Sahrane',
    'Guassemi',
    'sahrane@guassemi',
    '0673928175',
    'toto',
    '1A2B3C4D5E6F7G5'
  );

CREATE TABLE vehicle (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    car_type VARCHAR(100) NOT NULL,
    construction_date DATE NOT NULL,
    mileage INT NOT NULL,
    fuel VARCHAR(20) NOT NULL,
    technical_sheet VARCHAR(500),
    city VARCHAR(100) NOT NULL,
    image VARCHAR(500)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
  vehicle (brand, model, car_type, construction_date, mileage, fuel, technical_sheet, city, image)
VALUES
  (
    'Mercedes-Benz',
    'E-Class Aut',
    'Sedan',
    '2016-07-22',
    6660,
    "Gasoline",
    'Incroyable',
    'Lille',
    'https://i.imgur.com/uHqgOuo.jpeg'
  ),
  (
    'Land Rover',
    'Range Rover',
    'SUV',
    '2018-09-01',
    24031,
    "Gasoline",
    'Incroyable',
    'Paris',
    'https://i.imgur.com/NSj9Yol.jpg'
  ),
  (
    'Peugeot',
    'E-3008',
    'Berline',
    '2020-02-13',
    8070,
    "Electrique",
    'Incroyable',
    'Lyon',
    'https://i.imgur.com/HgcnLTa.jpg'
  ),
  (
    'Mercedes-Benz',
    'C-Class Coupé',
    'Coupe',
    '2022-12-25',
    3091,
    "Gasoline",
    'Incroyable',
    'Bordeaux',
    'https://i.imgur.com/NeyRSIj.jpg'
  ),
  (
    'Fiat',
    '500',
    'Citadine',
    '2021-03-29',
    11003,
    "Diesel",
    'Incroyable',
    'Monaco',
    'https://i.imgur.com/xtCieEC.jpg'
  ),
  (
    'Peugeot',
    '308',
    'Sedan',
    '2015-03-21',
    54000,
    "Gasoline",
    'Incroyable',
    'Lille',
    'https://i.imgur.com/wJOjoDP.jpg'
  ),
  (
    'BMW',
    'X1 Aut.',
    'SUV',
    '2017-10-12',
    34020,
    "Gasoline",
    'Incroyable',
    'Paris',
    'https://i.imgur.com/qEpMrCc.jpg'
  ),
  (
    'Renault',
    'Captur',
    'Berline',
    '2019-06-26',
    8070,
    "Diesel",
    'Incroyable',
    'Lyon',
    'https://i.imgur.com/pKPbFgb.jpg'
  ),
  (
    'Nissan',
    'Z',
    'Coupe',
    '2020-05-18',
    3091,
    "Gasoline",
    'Incroyable',
    'Bordeaux',
    'https://i.imgur.com/bPYe1de.jpg'
  ),
  (
    'Renault',
    'Zoe',
    'Citadine',
    '2021-01-06',
    11703,
    "Electrique",
    'Incroyable',
    'Monaco',
    'https://i.imgur.com/dHTUScz.jpg'
  );

CREATE TABLE reservation (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  taken_date DATE NOT NULL,
  return_date DATE NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT FK_user_reservation FOREIGN KEY (user_id) REFERENCES user(id),
  vehicle_id INT NOT NULL,
  CONSTRAINT FK_vehicle_reservation FOREIGN KEY (vehicle_id) REFERENCES vehicle(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;