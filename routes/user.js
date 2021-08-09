var express = require('express')
var router = express.Router()
const User = require('./../models/user');

router.post('/create', function (req, res) {
    let body = req.body;
    var user = new User();
    user.username = body.username;
    user.email = body.email;
    user.save().then(() => {
        res.json({
            status: true,
            msg: 'User has been created successfully!',
            data: user,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while creating user.',
            data: err,
        });
    }).finally(() => res.end());
})

router.get('/view/:id', function (req, res) {
    let id = req.params.id;
    User.findByPk(id).then( user => {
        res.json({
            status: true,
            msg: `get user #${id}`,
            data: user,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while getting user.',
            data: err,
        });
    }).finally(() => res.end());
})

router.put('/update/:id', function (req, res) {
    let id = req.params.id;
    User.findByPk(id).then( user => {
        if(user == null){
            throw new Error(`User is found for the id #${id}`);
        }
        let body = req.body;
        user.username = body.username;
        user.email = body.email;
        return user.save();
    }).then( user => {
        res.json({
            status: true,
            msg: `get user #${id}`,
            data: user,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while getting user.',
            data: err,
        });
    }).finally(() => res.end());
})

router.delete('/delete/:id', function (req, res) {
    let id = req.params.id;
    User.destroy({
        where: {
            id: id,
        }
    }).then( count => {
        res.json({
            status: true,
            msg: `get user #${id}`,
            data: count,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while getting user.',
            data: err,
        });
    }).finally(() => res.end());
})

router.get('/index', function (req, res) {
    User.findAll().then( users => {
        res.json({
            status: true,
            msg: 'List of users',
            data: users,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while listings users.',
            data: err,
        });
    }).finally(() => res.end());
})

module.exports = router