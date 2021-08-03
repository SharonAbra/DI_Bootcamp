UPDATE film SET language_id = 3 WHERE film_id BETWEEN 40 AND 45;

store_id, address_id => we will need to insert with SELECT statement.

table dropped without issues.

SELECT COUNT(*) FROM rental WHERE return_date is null;

SELECT inventory.film_id, payment.amount, rental.return_date, film.title
FROM inventory
JOIN FILM ON inventory.film_id = film.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN payment ON payment.rental_id = rental.rental_id WHERE return_date is null ORDER BY amount DESC LIMIT 30;

SELECT film.title, actor.first_name, actor.last_name
FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND film.description LIKE 'sumo';

SELECT film.title
FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = 'Documentary' AND film.rating = 'R' AND film.length < 60;

SELECT film.title, rental.return_date, payment.amount
FROM film
JOIN inventory ON inventory.film_id = film.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
JOIN payment ON payment.customer_id = customer.customer_id
WHERE payment.amount > 4.00 AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND date(rental.return_date) BETWEEN '2005-07-28' AND '2005-08-01';

SELECT film.title, rental.return_date, payment.amount, film.replacement_cost
FROM film
JOIN inventory ON inventory.film_id = film.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
JOIN payment ON payment.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
OR film.description LIKE 'boat' OR film.title LIKE 'boat'
ORDER BY film.replacement_cost DESC LIMIT 1;