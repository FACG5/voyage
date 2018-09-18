BEGIN ;

DROP TABLE IF EXISTS person, business, users,  review, comment CASCADE;

CREATE TABLE users (
	id serial PRIMARY KEY,
	email varchar NOT NULL UNIQUE,
	password varchar NOT NULL,
	type varchar NOT NULL
);

CREATE TABLE person (
	id serial PRIMARY KEY,
	user_id integer REFERENCES users(id) ON UPDATE CASCADE,
	username varchar NOT NULL UNIQUE,
	first_name varchar NOT NULL,
	last_name varchar NOT NULL,
	birthday DATE NOT NULL,
	gender varchar NOT NULL
);

CREATE TABLE business (
	id serial PRIMARY KEY,
	user_id integer  REFERENCES users(id) ON UPDATE CASCADE,
	name varchar NOT NULL UNIQUE,
	address TEXT NOT NULL,
	description TEXT NOT NULL,
	img TEXT NOT NULL,
	category varchar NOT NULL
);

CREATE TABLE review (
	id serial PRIMARY KEY,
	person_id integer NOT NULL REFERENCES person(id) ON UPDATE CASCADE,
	business_id integer NOT NULL REFERENCES business(id) ON UPDATE CASCADE,
	content TEXT NOT NULL,
	evaluation integer NOT NULL
);

CREATE TABLE comment (
	id serial PRIMARY KEY,
	person_id integer NOT NULL REFERENCES person(id) ON UPDATE CASCADE,
	review_id integer NOT NULL REFERENCES review(id) ON UPDATE CASCADE,
	content TEXT NOT NULL
);

COMMIT ;
