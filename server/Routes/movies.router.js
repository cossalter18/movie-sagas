const express = require('express')
const pool = require('../modules/pool')

const router= express.Router();

// return all movies 
router.get('/', (req, res) => {
    const queryText=`SELECT * FROM "movies";`;
    pool.query(queryText)
    .then((result) =>{
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('ERROR completing movie query', err);
        res.sendStatus(500)
    })
})

router.get('/info/:id', (req, res) =>{
    const queryText = `SELECT * FROM "movies" WHERE "id" =$1;`;
    pool.query(queryText, [req.params.id])
    .then((result)=>{
        console.log('GET DETAILS:', req.params.id );
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500)
        console.log(error)
    })
})


//PUT
//error in this PUT, need to troubleshoot
router.put('/', (req, res) =>{
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    console.log("!!!!!!!!!!!!!!", req.body)
    pool.query(queryText, [req.body.title, req.body.description, req.params.id])
    .then((result) => {
        res.sendStatus(200)
    }).catch((error) => {
        res.sendStatus(500)
    })
})



module.exports = router;