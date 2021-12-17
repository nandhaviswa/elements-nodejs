var express = require('express')
var router = express.Router()
const { UserService, } = require('./../services/user-service');
const User = require('./../models/user');

router.post('/create', function (req, res) {
    let body = req.body;
    UserService.create(body).then(model => {
        res.json({
            status: true,
            msg: 'User has been created successfully!',
            data: model,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while creating user.',
            data: err.message,
        });
    }).finally(() => res.end());
})

router.get('/view/:id', function (req, res) {
    let id = req.params.id;
    UserService.view(id).then( user => {
        res.json({
            status: true,
            msg: `view user #${id}`,
            data: user,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while getting user.',
            data: err.message,
        });
    }).finally(() => res.end());
})

router.put('/update/:id', function (req, res) {
    let id = req.params.id;
    let body = req.body;
    UserService.update(id, body).then( user => {
        res.json({
            status: true,
            msg: `update user #${id}`,
            data: user,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while updating user!',
            data: err.message,
        });
    }).finally(() => res.end());
})

router.delete('/delete/:id', function (req, res) {
    let id = req.params.id;
    UserService.delete(id).then( count => {
        res.json({
            status: true,
            msg: `delete user #${id}`,
            data: count,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while deleting user.',
            data: err.message,
        });
    }).finally(() => res.end());
})

router.get('/index', function (req, res) {
    UserService.index().then( users => {
        res.json({
            status: true,
            msg: 'List of users',
            data: users,
        });
    }).catch( err => {
        res.json({
            status: false,
            msg: 'Error while listing users.',
            data: err.message,
        });
    }).finally(() => res.end());
})

module.exports = router