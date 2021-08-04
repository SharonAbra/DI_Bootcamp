CREATE TABLE orders (
order_id SERIAL PRIMARY KEY,
customer_name VARCHAR(30)
);

CREATE TABLE items(
item_id SERIAL PRIMARY KEY,
item_name VARCHAR(30),
price SMALLINT,
order_belong_id INT REFERENCES orders(order_id)
);

INSERT INTO orders (customer_name)
VALUES
('Shmuel'),
('Yossi'),
('Sarah'),
('Lilach'),
('Sapir');

INSERT INTO items (item_name, price, order_belong_id)
VALUES
('Chair', 100, (SELECT order_id FROM orders WHERE order_id = 5)),
('Lamp', 150, (SELECT order_id FROM orders WHERE order_id = 5)),
('Desk', 300, (SELECT order_id FROM orders WHERE order_id = 3)),
('Poster', 20, (SELECT order_id FROM orders WHERE order_id = 2)),
('Soap', 5, (SELECT order_id FROM orders WHERE order_id = 1));