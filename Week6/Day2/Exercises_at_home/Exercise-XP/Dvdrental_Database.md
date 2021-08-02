SELECT * FROM customer;
SELECT first_name, last_name FROM customer AS full_name;
SELECT DISTINCT create_date FROM customer;
SELECT customer_id, first_name, last_name, email FROM customer ORDER BY first_name DESC;
SELECT film_id, title, description, release_year,rental_rate FROM film ORDER BY rental_rate ASC;
SELECT address, phone FROM address WHERE district = 'Texas';
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Harry Potter';
SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Ha%';
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;
SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10 FETCH FIRST 10 ROWS ONLY;
SELECT payment.amount, payment.payment_date, customer.customer_id
FROM payment INNER JOIN customer ON payment.customer_id = customer.customer_id
ORDER BY customer_id ASC;
SELECT film.film_id, film.title, inventory.inventory_id
FROM film INNER JOIN inventory ON film.film_id = inventory.film_id WHERE inventory.film_id IS NULL;
SELECT city.city, country.country FROM city INNER JOIN country ON country.country_id = city.country_id;
SELECT payment.staff_id, payment.amount, payment.payment_date, customer.customer_id, customer.first_name, customer.last_name
FROM payment INNER JOIN customer ON payment.customer_id = customer.customer_id ORDER BY staff_id ASC;
SELECT SUM(amount), staff_id FROM payment GROUP BY staff_id;