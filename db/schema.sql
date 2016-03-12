DROP TABLE if EXISTS movies, theaters, showtimes CASCADE;

CREATE TABLE movies (
 movie_id SERIAL PRIMARY KEY UNIQUE,
 imdbID text NOT NULL,
 title text NOT NULL,
 year numeric,
 rated text,
 director text,
 actors text,
 language text,
 plot text,
 runtime text,
 poster text
);

CREATE TABLE theaters (
 theater_id SERIAL PRIMARY KEY UNIQUE,
 name VARCHAR(255)
);

CREATE TABLE showtimes (
 movie_id integer REFERENCES movies,
 theater_id integer REFERENCES theaters,
 showtime time
);
