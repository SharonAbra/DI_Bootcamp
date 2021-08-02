CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab
-- my prediction:
-- the first result will be a table with 4 people (id's and names)
-- the second  result will be a table with 2 rows, one of which is with the value null

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- my prediction: 0

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
-- my prediction: 3

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- my prediction: 2

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- my prediction: 3
