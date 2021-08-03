SELECT * FROM language;

SELECT film.title, film.description, language.name FROM film
INNER JOIN language ON language.language_id = film.language_id;

SELECT film.title, film.description, language.name FROM film
LEFT OUTER JOIN language ON language.language_id = film.language_id;

SELECT film.title, film.description, language.name FROM film
RIGHT OUTER JOIN language ON language.language_id = film.language_id;

SELECT film.title, film.description, language.name FROM film
FULL OUTER JOIN language ON language.language_id = film.language_id;

CREATE TABLE new_film (
film_id serial primary key,
film_name VARCHAR(40)
);

INSERT INTO new_film (film_name) VALUES
('The Cop'),
('The Blues'),
('Lady Di');

CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY NOT NULL,
film_id SMALLINT,
language_id SMALLINT,
title VARCHAR(40),
score SMALLINT,
review_text TEXT,
last_update TIMESTAMP,
FOREIGN KEY (film_id) REFERENCES new_film(film_id) ON DELETE CASCADE,
FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
);

INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update) 
VALUES
((SELECT film_id FROM new_film WHERE film_id = 3), (SELECT language_id FROM language WHERE language_id = 2), 'My opinion', 
7, 'It was very good indeed, will recommend to my friends', NOW()),
((SELECT film_id FROM new_film WHERE film_id = 2), (SELECT language_id FROM language WHERE language_id = 1), 'Review on movie', 
8, 'Excellent movie, enjoyed vey much', NOW());

DELETE FROM NEW_FILM WHERE film_id = 2;
SELECT * FROM customer_review;


