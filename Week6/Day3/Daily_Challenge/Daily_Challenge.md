CREATE TABLE users (
	user_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR (30) NOT NULL,
	user_name VARCHAR (30) NOT NULL,
	email VARCHAR (30) NOT NULL,
	pet_id smallint NOT NULL ,
	FOREIGN KEY (pet_id) REFERENCES pets (pet_id),
	album_id smallint NOT NULL,
	FOREIGN KEY (album_id) REFERENCES albums (album_id)
);

CREATE TABLE pets (
	pet_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR (30) NOT NULL,
	species VARCHAR (30) NOT NULL
);

CREATE TABLE albums (
	album_id SERIAL PRIMARY KEY NOT NULL,
	title VARCHAR NOT NULL
);

INSERT INTO albums (title)
VALUES
('quidem molestiae enim'),
('sunt qui excepturi placeat culpa'),
('omnis laborum odio'),
('non esse culpa molestiae omnis sed optio'),
('eaque aut omnis a'),
('natus impedit quibusdam illo est'),
('quibusdam autem aliquid et et quia'),
('qui fuga est a eum'),
('quam nostrum impedit mollitia quod et dolor'),
('consequatur autem doloribus natus consectetur'),
('ab rerum non rerum consequatur ut ea unde'),
('ducimus molestias eos animi atque nihil'),
('ut pariatur rerum ipsum natus repellendus praesentium'),
('voluptatem aut maxime inventore autem magnam atque repellat'),
('aut minima voluptatem ut velit'),
('nesciunt quia et doloremque'),
('velit pariatur quaerat similique libero omnis quia'),
('voluptas rerum iure ut enim');

INSERT INTO pets (name, species)
VALUES
('Meowsy', 'cat'),
('Barky', 'dog'),
('Purrpaws', 'cat'),
('Simba', 'cat'),
('Bear', 'cat'),
('Fluff', 'dog'),
('Nosy', 'dog'),
('Cookie', 'cat'),
('Fritz', 'dog'),
('Meir', 'cat');

INSERT INTO users (name, user_name,	email, pet_id, album_id)
VALUES
('Leanne Graham', 'Bret', 'Sincere@april.biz', (SELECT pet_id FROM pets WHERE pet_id = 10), (SELECT album_id FROM albums WHERE album_id = 36)),
('Ervin Howell', 'Antonette', 'Shanna@melissa.tv',(SELECT pet_id FROM pets WHERE pet_id = 9), (SELECT album_id FROM albums WHERE album_id = 11)),
('Clementine Bauch', 'Samantha', 'Nathan@yesenia.net',(SELECT pet_id FROM pets WHERE pet_id = 8), (SELECT album_id FROM albums WHERE album_id = 23)),
('Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org',(SELECT pet_id FROM pets WHERE pet_id = 7), (SELECT album_id FROM albums WHERE album_id = 18)),
('Chelsey Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca',(SELECT pet_id FROM pets WHERE pet_id = 6), (SELECT album_id FROM albums WHERE album_id = 6)),
('Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info', (SELECT pet_id FROM pets WHERE pet_id = 5), (SELECT album_id FROM albums WHERE album_id = 3)),
('Kurtis Weissnat', 'Elwyn.Skiles', 'Telly.Hoeger@billy.biz',(SELECT pet_id FROM pets WHERE pet_id = 4), (SELECT album_id FROM albums WHERE album_id = 13)),
('Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me',(SELECT pet_id FROM pets WHERE pet_id = 3), (SELECT album_id FROM albums WHERE album_id = 15)),
('Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io',(SELECT pet_id FROM pets WHERE pet_id = 2), (SELECT album_id FROM albums WHERE album_id = 25)),
('Clementina DuBuque', 'Moriah.Stanton', 'Rey.Padberg@karina.biz',(SELECT pet_id FROM pets WHERE pet_id = 1), (SELECT album_id FROM albums WHERE album_id = 35));

SELECT users.name, users.email, pets.name, pets.pet_id, albums.title, albums.album_id
FROM users
INNER JOIN pets ON pets.pet_id = users.pet_id
INNER JOIN albums ON albums.album_id = users.album_id;

SELECT users.name, users.email, pets.name AS pet_name, pets.pet_id
FROM users
LEFT JOIN pets ON pets.pet_id = users.pet_id;

SELECT users.name, users.email, pets.name AS pet_name, pets.pet_id
FROM users
RIGHT JOIN pets ON pets.pet_id = users.pet_id;

SELECT users.name, users.email, pets.name, pets.pet_id, albums.title, albums.album_id
FROM users
FULL JOIN pets ON pets.pet_id = users.pet_id
FULL JOIN albums ON albums.album_id = users.album_id;