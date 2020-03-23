var express = require('express');
var users = express.Router();
const config = require('./config');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")


process.env.SECRET_KEY = 'secret'

users.post("/admin/register",(req,res)=>{
    if(req.body.password.length>0 && req.body.password==req.body.confirmPassword){
        console.log("Correct!!")
        const userData = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }

        User.QueryInDb("SELECT * FROM Admin_Account WHERE email='"+req.body.email+"'")
        .then(data => {
            if(data.rowsAffected==0){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err)throw err ;
                    userData.password = hash
                    User.Admin_InsertAccount(userData.name,userData.email,userData.password)
                    .then(user=>{
                        console.log("insert row(s) affected :"+user.rowsAffected)
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
    }else{
        if(req.body.password.length==0){res.json({error:'Please type password correctly'})}
        else if(req.body.password!=req.body.confirmPassword){res.json({error:'Please confirm password correctly'})}
    }
})

users.post("/admin/login",(req,res)=>{
    const userData = {
        email : req.body.email,
        password : req.body.password
    }
    console.log(userData)
    User.QueryInDb("SELECT * FROM Admin_Account WHERE email='"+req.body.email+"'")
    .then(data =>{
        console.log(data.recordset[0])
        if(data.rowsAffected==0){
            res.json({error:'No user found'})
        }
        else{
            let passwordIsValid = bcrypt.compareSync(userData.password, data.recordset[0].password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            let token = jwt.sign({ email: data.email }, config.secret, { expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: data.recordset[0].email });
        }
    })
    .catch(err=>{res.json({error:"There is a error :" +err})})
})
module.exports = users

