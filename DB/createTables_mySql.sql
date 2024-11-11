CREATE TABLE preparation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  method VARCHAR(100) NOT NULL,
  gr_coffee INT NOT NULL,
  ml_water INT NOT NULL,
  water_tds INT,
  water_temperature INT,
  granularity VARCHAR(50),
  notes TEXT,
  coffee_type_id INT,  -- Chiave esterna che punta a "coffee_type"
  owner_id INT,  -- Chiave esterna che punta a "users"
  creation_date DATE DEFAULT CURRENT_DATE,
  FOREIGN KEY (coffee_type_id) REFERENCES coffee_type(id),
  FOREIGN KEY (owner_id) REFERENCES users(id)
  --reference to pour 
) ENGINE=InnoDB;


--blooming e pouring
--first pour:ml
--other pours: time, ml
--in case of espresso: -preinfusion:time, -extraction: first drop, quantità desiderata, total time


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  surname VARCHAR(100),
  nickname VARCHAR(100) UNIQUE,  -- Deve essere univoco
  email VARCHAR(255) UNIQUE NOT NULL,  -- L'email deve essere unica
  birth_date DATE,
  position VARCHAR(100),
  password VARCHAR(255) NOT NULL  -- Potresti usare un hash per la password
) ENGINE=InnoDB;


CREATE TABLE coffee_type (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  productor VARCHAR(255),
  origin VARCHAR(255),
  region VARCHAR(255),
  altitude INT,
  variety VARCHAR(255),
  process VARCHAR(255),
  roasting_day DATE,
  roasting_degree VARCHAR(50),
  roaster VARCHAR(255),
  harvest_date DATE
) ENGINE=InnoDB;


--valutations:
--hot, cold, warm==> evoluzione
--smell:1-5, notes
--color: 1-5, notes
--taste: 1-5, notes
--per ogni campo della ruota un numerico
--generic notes
