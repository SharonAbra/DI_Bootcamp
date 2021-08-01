CREATE TABLE students(
student_id SERIAL PRIMARY KEY,
first_name VARCHAR (50),
last_name VARCHAR (100),
birth_date DATE
);

INSERT INTO students(first_name, last_name, birth_date)
VALUES
    ('Marc', 'Benichou', '02/11/1998'),
    ('Yoan', 'Cohen', '03/12/2010'),
	('Lea', 'Benichou', '27/07/1987'),
	('Amelia', 'Dux', '07/04/1996'),
	('David', 'Grez', '14/06/2003'),
	('Omer', 'Simpson', '03/10/1980');

INSERT INTO students(first_name, last_name, birth_date)
VALUES('Sharon', 'Abramovich', '30/12/1987');

SELECT * FROM students;
SELECT first_name, last_name FROM students;
SELECT * FROM students WHERE student_id = 2;
SELECT * FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';
SELECT * FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';
SELECT * FROM students WHERE first_name LIKE '%a%';
SELECT * FROM students WHERE first_name LIKE 'a%';
SELECT * FROM students WHERE first_name LIKE '%a';
SELECT * FROM students WHERE SUBSTRING(first_name, LENGTH(first_name)-1, 1) = 'a';
SELECT * FROM students WHERE student_id in (1, 3);
SELECT * FROM students WHERE birth_date >= '01/01/2000';

