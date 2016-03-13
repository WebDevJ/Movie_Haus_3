-- Movie listings query

SELECT m.title, array_agg(s.showtime)
FROM movies as m
LEFT JOIN showtimes as s
ON m.movie_id = s.movie_id
GROUP BY m.title;

-- Single Movie query

SELECT m.*, array_agg(s.showtime)
FROM movies as m
LEFT JOIN showtimes as s
ON m.movie_id = s.movie_id
WHERE m.movie_id=1
GROUP BY m.movie_id;

-- delete movie query
DELETE FROM showtimes
WHERE movie_id=17;

DELETE FROM movies
WHERE movie_id=17;
