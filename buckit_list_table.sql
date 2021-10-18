CREATE TABLE users (
  "userID" varchar NOT NULL,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  PRIMARY KEY ("userID")
);

CREATE TABLE  buckit_list (
	"buckitID" varchar NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
  "url" varchar,
  "rating" int,
  "userID" varchar,
	PRIMARY KEY ("buckitID"),
  FOREIGN KEY ("userID") REFERENCES users("userID")
);