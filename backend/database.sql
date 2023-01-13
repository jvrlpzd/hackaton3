DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS vehicle;
DROP TABLE IF EXISTS reservation;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  profile_picture VARCHAR(500),
  license VARCHAR(100) UNIQUE NOT NULL,
  role VARCHAR(20) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` VALUES (1,'Chloe','Bidau','chloebidau@hotmail.fr','0647067609','$argon2id$v=19$m=65536,t=5,p=1$GfoNdBi1vgoc4TxdWBVH6A$ZsVvZmnDMSwW40Lz0tm5W5UwqdJNLCJ+ZrXb9MbMzzo',NULL,'1A2B3C4D5E6F8G0','user'),(2,'Doroteya','Donova','doroteya@donova.fr','0647067610','$argon2id$v=19$m=65536,t=5,p=1$a4wIpQ6TEB/bRivgzEUCag$R3LMRRfdCervop+pWorKoAKK10YViVZJEc7a5c/V3II',NULL,'1A2B3C4D5E6F8G1','admin'),(3,'Javier','Lopez','javier@lopez.fr','0647067611','$argon2id$v=19$m=65536,t=5,p=1$tkZASsFZaPQiUbLTGQ1GdA$LIbQzH9cWe8PDUQksEZ0LxdqCFghw4KcUs3NecMpBSM',NULL,'1A2B3C4D5E6F8G2','user'),(4,'Ryan','Beaujot','ryan@beaujot.fr','0647067612','$argon2id$v=19$m=65536,t=5,p=1$s0khPns0y6GXDtneIJF2sQ$PsD2sn9ZOJWQ52mnoLEfcRHdxDGHesTD6ghxdaIpUf8',NULL,'1A2B3C4D5E6F8G3','user'),(5,'Matthieu','Georges','matthieu@georges.fr','0647067613','$argon2id$v=19$m=65536,t=5,p=1$hinZbfKyRsIenolZB1YM/w$Yxaor2Rm/NwGfh98Zuq/s7LC/b0pblhpIM0NZxXArCM',NULL,'1A2B3C4D5E6F8G4','mecano');

CREATE TABLE vehicle (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    car_type VARCHAR(100) NOT NULL,
    construction_date VARCHAR(20) NOT NULL,
    mileage INT NOT NULL,
    fuel VARCHAR(20) NOT NULL,
    technical_sheet VARCHAR(500),
    city VARCHAR(100) NOT NULL,
    image VARCHAR(500),
    needs_repairing BOOL NOT NULL DEFAULT false
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
    'Coupé',
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
    'Coupé',
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
  ),(
    'Peugeot',
    '208',
    'Sedan',
    '2016-07-22',
    2660,
    "Electrique",
    'Incroyable',
    'Lille',
    'https://www.peugeot.fr/content/dam/peugeot/master/b2c/open/desk/208/Showroom_208_D_Allure_1.jpg?imwidth=1920'
  ),(
    'Audi',
    'Q5',
    'SUV',
    '2016-07-22',
    '45000',
    "Electrique",
    'Incroyable',
    'Lille',
    'https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-q5-suv-green-2021.png'
  ),
  (
    'Land Rover',
    'Range Rover',
    'SUV',
    '2018-09-01',
    24031,
    "Gasoline",
    'Incroyable',
    'Lille',
    'https://i.imgur.com/NSj9Yol.jpg'
  ),
  (
    'Nissan',
    'Z',
    'Coupé',
    '2020-05-18',
    3091,
    "Gasoline",
    'Incroyable',
    'Lille',
    'https://i.imgur.com/bPYe1de.jpg'
  );

CREATE TABLE reservation (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  taken_date DATE NOT NULL,
  return_date DATE NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT FK_user_reservation FOREIGN KEY (user_id) REFERENCES user(id),
  vehicle_id INT NOT NULL,
  CONSTRAINT FK_vehicle_reservation FOREIGN KEY (vehicle_id) REFERENCES vehicle(id),
  completed BOOL NOT NULL DEFAULT false
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
  reservation (taken_date, return_date, user_id, vehicle_id, completed)
VALUES
  (
    '2022-02-03',
    '2022-02-06',
    3,
    3,
    true
  ),
  (
    '2022-05-03',
    '2022-05-06',
    3,
    8,
    true
  ),
  (
    '2023-01-20',
    '2023-01-22',
    5,
    1,
    false
  ),
  (
    '2023-01-27',
    '2023-01-29',
    4,
    1,
    false
  );