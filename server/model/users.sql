DROP TABLE IF EXISTS userProfile;
DROP TABLE IF EXISTS sessionTable;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
  _id serial PRIMARY KEY,
  lastName varchar NOT NULL,  //not case sensitive!!!!!
  email varchar NOT NULL UNIQUE,
  psword varchar NOT NULL
);

CREATE TABLE sessionTable(
  user_id integer NOT NULL,
  session_id varchar NOT NULL,
  PRIMARY KEY (user_id, session_id),
  FOREIGN KEY (user_id) REFERENCES users(_id)
);

CREATE TABLE userProfile(
  _id serial,
  user_id integer NOT NULL,
  pic varchar NOT NULL,
    PRIMARY KEY (_id),
    FOREIGN KEY (user_id) REFERENCES users(_id)
);

insert into users (_id, firstName, lastName, email, psword, zipcode) values (DEFAULT, 'Anthony', 'Martinez','anthony@petfinder.com', 'ilovepets', '90210');  
insert into petList (user_id, pet_id) values ('1', '50563543' );
insert into petList (user_id, pet_id) values ('1', '50563546' );


{
   "firstName": "Ruben",
    "lastName": "Kirsh",
    "email": "ruben@petfinder.com",
    "psword": "1234",
    "zipcode": "90210"
}
