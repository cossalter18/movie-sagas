const express = require('express')
const pool = require('../modules/pool')

const router = express.Router();

//use to get genres
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "genres";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('ERROR completing movie query', err);
            res.sendStatus(500)
        })
})










module.exports = router;