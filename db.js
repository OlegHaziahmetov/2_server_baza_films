const Pool = require('pg').Pool;
const poll = new Pool({
    user: "postgres",
    password: '****',
    host: "localhost",
    port: 5432,
    database: "baza_films"

})

module.exports = poll;