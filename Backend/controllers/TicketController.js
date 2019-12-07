var express = require('express');

var sql = require("mssql");

var config = {
    user: 'sa',
    password: '123456789987654321',
    server: 'Localhost', 
    database: 'eTicket_System' 
};


const getTicketPage = (req, res) => {
     sql.connect(config, function (err) {
    
        if (err) console.log("Error connect to DB : "+err);

        var request = new sql.Request();   
        request.query('select * from eTicket', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
};

const submitTicketPage = (req, res) => {
    res.send('Thank you for submit data');
};

module.exports = {getTicketPage,submitTicketPage};