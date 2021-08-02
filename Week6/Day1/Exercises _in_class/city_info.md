Questions
1. Select everything from the table. (every row and columns) - How many records does the table have? 
   4711

2. What was Bostons temperature on the 01/03/2015 at 11am ? 
   3.08167688589856

3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ? 
"2015-03-05 22:00:00"
"2015-03-07 21:00:00"
"2015-03-07 23:00:00"
"2015-03-12 21:00:00"
"2015-03-13 20:00:00"
"2015-03-13 21:00:00"
"2015-03-13 22:00:00"
"2015-03-13 23:00:00"
"2015-03-14 20:00:00"
"2015-03-15 01:00:00"
"2015-03-19 20:00:00"
"2015-03-19 22:00:00"

4. Which city was the most noisy (show the name of the city, the date and the noise index) ?
"Geneva"	"2015-03-14 17:00:00"	2144.39390916048

5. Which city was the least noisy (show the name of the city, the date and the noise index)
"Boston"	"2015-03-07 08:00:00"	938.196750048431

6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.

"San Francisco"	"2015-03-26 20:00:00"	958.473042048124
"San Francisco"	"2015-03-26 21:00:00"	788.289771950703
"San Francisco"	"2015-03-26 22:00:00"	783.247665176545
"San Francisco"	"2015-03-26 23:00:00"	792.962890803298

1. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
Many entries...

8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
"Rio de Janeiro"	7914.10044111076	"2015-03-02 11:00:00"	1

9.  Select only the info of the cities that start with an "S" (uppercase of lowercase). - Look at the DISTINCT constraint.
"Singapore"
"San Francisco"
"Shanghai"

10. Add to the table, todays information in Israel - of this very hour. (timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
- Use the return statement to see what you just inserted: https://www.postgresqltutorial.com/postgresql-insert/

SELECT * FROM city_info;
SELECT temperature FROM city_info WHERE city = 'Boston' And time_stamp = '2015-03-01 11:00:00';
SELECT time_stamp FROM city_info WHERE city = 'San Francisco' And temperature BETWEEN 28 AND 30;
SELECT city, time_stamp, sound FROM city_info ORDER BY sound ASC LIMIT 1;
SELECT city, time_stamp, sound FROM city_info ORDER BY sound DESC LIMIT 1;
SELECT city, time_stamp, dust FROM city_info WHERE city = 'San Francisco' And date(time_stamp) = '2015-03-26' AND EXTRACT(HOUR FROM time_stamp) >= '20';
SELECT city, time_stamp, humidity FROM city_info WHERE city = 'Geneva' AND (humidity < 40 OR humidity > 60);
SELECT city, time_stamp FROM city_info WHERE city = 'Geneva' AND (humidity < 40 OR humidity > 60);
SELECT city, light, time_stamp, EXTRACT(DOW from time_stamp) AS day_number FROM city_info ORDER BY light DESC LIMIT 1;
SELECT DISTINCT city FROM city_info WHERE CITY LIKE 'S%';
INSERT INTO CITY_INFO(time_stamp,city,temperature,light,airquality_raw,sound,humidity,dust)
VALUES ('2021-08-01', 'Tel-Aviv', 34, 1, 5, 10, 70, 150)
RETURNING *;