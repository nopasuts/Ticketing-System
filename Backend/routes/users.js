var express = require('express');
var users = express.Router();

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")


process.env.SECRET_KEY = 'secret'

users.post("/admin/register",(req,res)=>{
    const userData = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    console.log(userData)

    User("SELECT * FROM Account WHERE email='"+req.body.email+"'")
    .then(data => {
        if(data.rowsAffected==0){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err)throw err ;
                userData.password = hash
                console.log(hash)
                User("INSERT INTO Account(name,email,password,role) VALUES('"+userData.name+"','"+userData.email+"','"+userData.password+"','admin')")
                .then(user=>{
                    console.log("user = = "+user)
                    res.json({status: userData.email + ' registered'})
                })
                .catch(err =>{
                    res.send('error: '+err)
                })
            })
        }
        else{
            res.json({error:'User already exists'})
        }
    })
    .catch(err=>{res.send('error at query (Users.js) : '+err)})
})
module.exports = users

