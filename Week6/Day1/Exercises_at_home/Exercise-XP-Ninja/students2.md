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
SELECT first_name, last_name, birth_date FROM students WHERE student_id > 3
ORDER BY last_name;
SELECT first_name, last_name, birth_date FROM students WHERE birth_date IN (SELECT MAX(birth_date) FROM students);
SELECT first_name, last_name, birth_date FROM students OFFSET 2 ROWS;
