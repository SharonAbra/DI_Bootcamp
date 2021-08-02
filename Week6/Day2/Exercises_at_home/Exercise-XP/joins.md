SELECT * FROM items ORDER BY price ASC;
SELECT * FROM items WHERE price >= 80 ORDER BY price ASC;
SELECT first_name, last_name FROM customers ORDER BY last_name ASC LIMIT 3;
SELECT last_name FROM customers ORDER BY last_name DESC;

INSERT INTO purchases (customer_id, item_id)
VALUES
((SELECT customer_id from customers WHERE customer_id = 1), (SELECT item_id from items WHERE item_id = 3)),
((SELECT customer_id from customers WHERE customer_id = 2), (SELECT item_id from items WHERE item_id = 2)),
((SELECT customer_id from customers WHERE customer_id = 3), (SELECT item_id from items WHERE item_id = 1)),
((SELECT customer_id from customers WHERE customer_id = 4), (SELECT item_id from items WHERE item_id = 2)),
((SELECT customer_id from customers WHERE customer_id = 5), (SELECT item_id from items WHERE item_id = 2));

SELECT * FROM purchases;

SELECT customers.first_name, customers.last_name, purchases.customer_id FROM customers INNER JOIN purchases ON customers.customer_id = purchases.customer_id;
SELECT * FROM purchases WHERE customer_id = 4;
SELECT * FROM purchases WHERE item_id = 1 OR item_id = 2;