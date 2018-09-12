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
	user_id integer NOT NULL REFERENCES users(id) ON UPDATE CASCADE,
	username varchar NOT NULL UNIQUE,
	first_name varchar NOT NULL,
	last_name varchar NOT NULL,
	birthday DATE NOT NULL,
	gender varchar NOT NULL
);

CREATE TABLE business (
	id serial PRIMARY KEY,
	user_id integer NOT NULL REFERENCES users(id) ON UPDATE CASCADE,
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

INSERT INTO users (email, password, type) VALUES ('asmaa@gmail.com', '000', 'person');
INSERT INTO users (email, password, type) VALUES ('ahmad@gmail.com', '000', 'business');

INSERT INTO person (user_id, username, first_name, last_name, birthday, gender) VALUES (1,'asmaa','asmaa','izz', '1996-05-17','femail');
INSERT INTO business (user_id, name, address, description, img, category) VALUES (2,'ahmad','Gaza-Naser','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', 'http://www.lakeheart.it/files/20170324_185419-1.jpg','restaurant');


INSERT INTO review (person_id, business_id, content, evaluation) VALUES (1, 1, 'There are many variations of passages of Lorem ',4);

INSERT INTO comment (person_id, review_id, content) VALUES (1, 1, 'WooW');

INSERT INTO users (email, password, type) VALUES ('asmaa1@gmail.com','$2b$10$d0cyrUlOtl94wxL7wMcVjO24F3Ld6LqZqAVdugDfzlY/E2aGKm5Cq', 'person');

COMMIT ;
