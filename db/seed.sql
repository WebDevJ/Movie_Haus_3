INSERT INTO movies
  (imdbID, title, year, rated, director, actors, language, Plot, Runtime, Poster)
VALUES
  ('tt2488496', 'Star Wars: Episode VII - The Force Awakens', 2015, 'PG', 'J.J. Abrams', 'Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver', 'English', 'Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.', '135 min', 'http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'),
  ('tt0103064', 'Terminator 2: Judgment Day', 1991, 'PG-13', 'James Cameron', 'Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick', 'English, Spanish', 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her young son, John Connor, from a more advanced cyborg, made out of liquid metal.', '137 min', 'http://ia.media-imdb.com/images/M/MV5BMTI4MDAwMDY3N15BMl5BanBnXkFtZTcwODIwMzMzMQ@@._V1._CR46,1,342,473_SY132_CR3,0,89,132_AL_.jpg_V1_SX300.jpg')
;

INSERT INTO theaters (name)
VALUES ('Moviehaus');

INSERT INTO showtimes (theater_id, movie_id, showtime)
VALUES
  (1, 1, '1:30 PM'),
  (1, 1, '3:30 PM'),
  (1, 1, '5:30 PM'),
  (1, 1, '7:30 PM'),
  (1, 2, '1:30 PM'),
  (1, 2, '3:30 PM'),
  (1, 2, '5:30 PM'),
  (1, 2, '7:30 PM')
; 
