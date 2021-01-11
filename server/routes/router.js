// express

const express = require("express");
const router  = express.Router();
const mysql   = require('mysql');
const config  = require('../config/config');

// initialize DB
const db = mysql.createConnection(config);

// Routing---- GET
router.get('/get/all', (req, res) => {
    const sqlSelect = "select distinct User_Id from report_dummy";

    db.query(sqlSelect, (err, result) => {
        console.log('result', result)
        res.send(result);
    });
});

router.get('/get', (req, res) => {
    const sqlDistinct = "select distinct Order_Name from report_dummy"
    db.query(sqlDistinct, (err, result) => {
        console.log('result', result)
        res.send(result)
    })
})

module.exports = {
    routes: router
}