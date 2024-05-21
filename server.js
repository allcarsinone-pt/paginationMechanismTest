const express = require('express');
const app = express();
const port = 3000;
const pg = require('pg');
const dotenv = require('dotenv')

dotenv.config()

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
});



app.get('/', async (req, res) => {7

    //pagination

    //TODO: put on repository class

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const users = await pool.query('SELECT * FROM users LIMIT $1 OFFSET $2', [limit, offset]);

    return res.json({  data: users.rows, page: page, itemsPerPage: limit });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});