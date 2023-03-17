const db = require('../db')

class GenreController {
    async createGenre(reg, res) {
        const {genre_id, name_genre, fk_films_id} = reg.body;
        const newGenre = await db.query(`INSERT INTO genre (genre_id, name_genre, fk_films_id) values ($1, $2, $3) RETURNING *`, 
        [genre_id, name_genre, fk_films_id]); 
        console.log(genre_id, name_genre, fk_films_id);
        res.json(newGenre.rows[0]);


    }
    async getGenre(reg, res) {
        const genre = await db.query('SELECT * FROM genre');
        res.json(genre.rows);

    }
    async getOneGenre(reg, res) {
        const id = reg.params.id;
        const genre = await db.query('SELECT * FROM genre WHERE genre_id = $1', [id]);
        res.json(genre.rows[0]);
    }
    async updateGenre(reg, res) {
        const {genre_id, name_genre, fk_films_id} = reg.body;
        const genre = await db.query(`UPDATE genre SET name_genre = $2, fk_films_id = $3 WHERE genre_id = $1 RETURNING *`,
         [genre_id, name_genre, fk_films_id]);
        res.json(genre.rows[0]);
    }
    async deleteGenre(reg, res) {
        const id = reg.params.id;
        const genre = await db.query('DELETE FROM genre WHERE genre_id = $1', [id]);
        res.json(genre.rows[0]);

    }
    async getGenreByFilm(reg, res) {
        const id = reg.query.id;
        const genre = await db.query('SELECT * FROM genre WHERE fk_films_id = $1', [id]);
        res.json(genre.rows);

    }


}

module.exports = new GenreController();