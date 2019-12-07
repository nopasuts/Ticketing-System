var express = require('express');

const getUserPage = (req, res) => {
     res.send('Hello Expressjs and router and get controller');
};
module.exports = {getUserPage};