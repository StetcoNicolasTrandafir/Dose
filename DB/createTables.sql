CREATE TABLE coffee_type (
  id INT IDENTITY(1,1) PRIMARY KEY,
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
);

CREATE TABLE users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100),
  surname VARCHAR(100),
  nickname VARCHAR(100) UNIQUE,  -- Unico nel database
  email VARCHAR(255) UNIQUE NOT NULL,  -- L'email dovrebbe essere unica
  birth_date DATE,
  position VARCHAR(100),
  password VARCHAR(255) NOT NULL  -- Potresti usare un hash per la password
);


CREATE TABLE preparation (
  id INT IDENTITY(1,1) PRIMARY KEY,
  method VARCHAR(100) NOT NULL,
  gr_coffee INT NOT NULL,
  ml_water INT NOT NULL,
  water_tds INT,
  water_temperature INT,
  granularity VARCHAR(50),
  notes TEXT,
  versate INT,  -- Chiave esterna che punta a "brews"
  coffee_type_id INT,  -- Chiave esterna che punta a "coffee_type"
  owner_id INT,  -- Chiave esterna che punta a "users"
  creation_date DATE DEFAULT GETDATE(),
  --FOREIGN KEY (versate) REFERENCES brews(id),  -- Assumendo che la tabella "brews" abbia una colonna "id"
  FOREIGN KEY (coffee_type_id) REFERENCES coffee_type(id),
  FOREIGN KEY (owner_id) REFERENCES users(id)
);



