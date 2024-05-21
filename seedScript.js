const pg = require('pg');
const dotenv = require('dotenv')
const fs = require('fs');


dotenv.config()

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
});

const seed = fs.readFileSync('./database.sql').toString();

pool.query(seed)
    .then(() => {
        console.log('Database seeded');
        pool.end();
    })
    .catch((err) => {
        console.error(err);
        pool.end();
    });
