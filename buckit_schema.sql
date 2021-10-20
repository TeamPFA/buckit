-- i think user_id in users should be SERIAL so that SQL will make it unique automatically--

CREATE TABLE users (
  user_id varchar NOT NULL,
  username varchar NOT NULL,
  password varchar NOT NULL,
  PRIMARY KEY (user_id)
);

--buckit_id shoudl be SERIAL as well
CREATE TABLE buckits (
  buckit_id varchar NOT NULL,
  title varchar NOT NULL,
  description varchar NOT NULL,
  url varchar,
  rating int,
  user_id varchar,
  PRIMARY KEY (buckit_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

