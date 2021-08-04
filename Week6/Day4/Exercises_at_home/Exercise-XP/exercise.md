SELECT first_name AS first, last_name AS last FROM employees;
SELECT department_id FROM employees GROUP BY department_id;
SELECT * FROM employees ORDER BY first_name DESC;
SELECT first_name, last_name, salary, (salary*0.15) AS PF FROM employees;
SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary ASC;
SELECT sum(salary) FROM employees;
SELECT MIN(salary) AS minimum, MAX(salary) AS maximum FROM employees;
SELECT AVG(salary) AS average FROM employees;
SELECT COUNT(*) FROM employees;
SELECT UPPER(first_name) FROM employees;
SELECT SUBSTRING(first_name, 1, 3) FROM employees;
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
SELECT first_name,last_name, LENGTH(first_name) + LENGTH(last_name) FROM employees;
SELECT first_name FROM employees WHERE first_name LIKE '%[0-9]%';
SELECT * FROM employees LIMIT 10;
SELECT first_name,last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000;
SELECT first_name,last_name, hire_date FROM employees WHERE EXTRACT(YEAR FROM hire_datE) = '1987';
SELECT first_name FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%c%';
SELECT employees.last_name, employees.salary, jobs.job_title
FROM employees
INNER JOIN jobs ON employees.job_id = jobs.job_id
WHERE jobs.job_title NOT IN ('Programmer', 'Shipping Clerk') AND employees.salary NOT IN (4500, 10000, 15000);
SELECT last_name, LENGTH(last_name) FROM employees WHERE LENGTH(last_name) = 6;
SELECT last_name FROM employees WHERE POSITION('e' IN last_name) = 3;
SELECT employees.job_id, jobs.job_title
FROM employees
INNER JOIN jobs ON employees.job_id = jobs.job_id
GROUP BY job_title, employees.job_id;
SELECT * FROM employees WHERE last_name IN ('Jones', 'Blake', 'Scott', 'King', 'Ford');


