'use strict'

class RoleSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/role:
        *   post:
        *     tags:
        *      - config => role
        *     description: SignUp role
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: role Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {Name: name}
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
        * /admin/role:
        *   get:
        *     tags:
        *      - config => role
        *     description: get all role
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
        *         description : all role in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/role:
        *   put:
        *     tags:
        *      - config => role
        *     description: update role
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update role Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all roles in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/role/:Id:
        *   get:
        *     tags:
        *      - config => role
        *     description: get all role
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in role
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all role in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = RoleSwagger;