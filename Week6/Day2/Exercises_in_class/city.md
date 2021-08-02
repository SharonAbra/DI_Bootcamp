--Use aggregate functions
-- 1. Where and when (only hour) it's the noisiest in the world?.
-- 2. How many rows per city does the table have ? 
-- 3. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
-- 4. How many rows does the table have about the city "San Francisco" ?

-- SELECT city, sound, EXTRACT(HOUR FROM time_stamp) FROM city_info WHERE SOUND = (SELECT MAX(sound) FROM city_info);
-- SELECT city, COUNT(city) FROM city_info GROUP BY city;
-- SELECT AVG(dust) FROM city_info WHERE date(time_stamp) BETWEEN '2015-03-01' AND '2015-03-05';
-- SELECT city, COUNT(city) FROM city_info GROUP BY city HAVING city = 'San Francisco';