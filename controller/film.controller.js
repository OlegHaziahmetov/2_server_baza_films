const db = require('../db')

class FilmController {
    async createFilm(reg, res) {
        const {films_id, title, year_released} = reg.body;
        const newFilm = await db.query(`INSERT INTO films (films_id, title, year_released) values ($1, $2, $3) RETURNING *`, [films_id, title, year_released]); 
        console.log(films_id, title, year_released);
        res.json(newFilm.rows[0]);

    }
    async getFilm(reg, res) {
        const films = await db.query('SELECT * FROM films');
        res.json(films.rows);

    }
    async getOneFilm(reg, res) {
        const id = reg.params.id;
        const film = await db.query('SELECT * FROM films WHERE films_id = $1', [id]);
        res.json(film.rows[0]);


    }
    async updateFilm(reg, res) {
        const {films_id, title, year_released} = reg.body;
        const film = await db.query(`UPDATE films SET title = $2, year_released = $3 WHERE films_id = $1 RETURNING *`,
         [films_id, title, year_released]);
        res.json(film.rows[0]); 

    }
    async deleteFilm(reg, res) {
        const id = reg.params.id;
        const film = await db.query('DELETE FROM films WHERE films_id = $1', [id]);
        res.json(film.rows[0]);



    }

}

module.exports = new FilmController();