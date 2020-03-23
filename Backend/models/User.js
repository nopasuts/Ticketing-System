const dbConfig = require("../database/db")
var sql = require('mssql');
// module.exports = function(query) {

//     return sql.connect(dbConfig).then(function () {
//         var request = new sql.Request();
//         // Return the Promise object that will contain the result of 
//         // the query when resolved
//         return request.query(query);
//     }).catch(err=>{return('error at User.js : '+err)})
// };

function QueryInDb (query) {

    return sql.connect(dbConfig).then(function () {
        var request = new sql.Request();
        // Return the Promise object that will contain the result of 
        // the query when resolved
        return request.query(query);
    }).catch(err=>{return('error at User.js : '+err)})
};

function Admin_InsertAccount (name,email,password) {

    return sql.connect(dbConfig).then(function () {
        var request = new sql.Request();
        //Input
        request.input('name', sql.VarChar, name)
        request.input('email', sql.VarChar, email)
        request.input('password', sql.VarChar, password)
        // Return the Promise object that will contain the result of 
        // the query when resolved
        return request.query("INSERT INTO Admin_Account(name,email,password) VALUES(@name,@email,@password)");
    }).catch(err=>{return('error at User.js : '+err)})
};
module.exports = {QueryInDb,Admin_InsertAccount}