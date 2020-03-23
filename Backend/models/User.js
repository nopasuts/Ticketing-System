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

function GetEmail (query) {

    return sql.connect(dbConfig).then(function () {
        var request = new sql.Request();
        // Return the Promise object that will contain the result of 
        // the query when resolved
        return request.query(query);
    }).catch(err=>{return('error at User.js : '+err)})
};
module.exports = {GetEmail}