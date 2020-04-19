'use strict'

class UserSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/user:
        *   post:
        *     tags:
        *      - user
        *     description: SignUp user
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: user Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {Contracts: string, Comments: string, SphereActivityId: number}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get getAll() {
        return `/**
        * @swagger
        * /admin/user:
        *   get:
        *     tags:
        *      - user
        *     description: get all user
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *     responses:
        *       200:
        *         description : all user in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/user:
        *   put:
        *     tags:
        *      - user
        *     description: update user
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update user Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all users in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/user/:Id:
        *   get:
        *     tags:
        *      - user
        *     description: get all user
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in user
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all user in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = UserSwagger;