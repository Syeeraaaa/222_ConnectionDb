import express from "express";
import pg from "pg";
const app = express()
const port = 3000
const {Pool} = pg

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
const pool = new Pool({
    user: 'Postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'Syeera',
    port: 5432,
})
app.get('/',(req, res, next) => {
    console.log("TES DATA :");
    pool.query('select * from biodata')
    .then(tesData => {
        console.log(tesData);
        res.send(tesData.rows);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal server error');
    })
})