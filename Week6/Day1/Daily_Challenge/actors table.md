CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES(' George',' Clooney','06/05/1961 ', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Daisey',' Ross','04/05/1991 ', 1)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Sharon','Cohen','08/11/1900', 7);

SELECT * FROM actors;

INSERT INTO table (column1, column2, …)
VALUES
    ('Josh','Cohen','03/12/1970', 0),
    ('Fay','Dunham','08/04/1991', 2,
	('Sean','Murphy','11/01/1980', 4);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('','','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Damon','08/10/1970');
SELECT * FROM actors;
 // cannot be done because we created the fields as not null