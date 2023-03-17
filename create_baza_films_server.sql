-- Database: baza_films

-- DROP DATABASE IF EXISTS baza_films;

CREATE DATABASE baza_films
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
CREATE TABLE films
(
	films_id int PRIMARY KEY,
	title text NOT NULL,	 
	year_released date NOT NULL 
	
		
);

CREATE TABLE genre
(
	genre_id int PRIMARY KEY,
	name_genre varchar(128) NOT NULL,
	fk_films_id int REFERENCES films(films_id) NOT NUL
	
);
	