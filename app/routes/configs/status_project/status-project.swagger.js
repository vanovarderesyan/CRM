'use strict'

class StatusProjectSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/status:
        *   post:
        *     tags:
        *      - config => status_project
        *     description: SignUp status
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: Status Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : {Name: name}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId,
        *         example : 
        *           message : int
        */`
    };


    static get update() {
        return `/**
        * @swagger
        * /admin/status:
        *   put:
        *     tags:
        *      - config => status_project
        *     description: update status
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update status name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:      
        *         example : 
        *           message : string
        */`
    };

    static get getAll() {
        return `/**
        * @swagger
        * /admin/status:
        *   get:
        *     tags:
        *      - config => status_project
        *     description: get all status
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
        *         description : all status in db       
        *         example : 
        *           message : array
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/status/:Id:
        *   get:
        *     tags:
        *      - config => status_project
        *     description: get all status
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in status
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeProject in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/status/:Id:
        *   delete:
        *     tags:
        *      - config => status_project
        *     description: get all status
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in status
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeProject in db       
        *         example : 
        *           message : array
        */`
    };
}

module.exports = StatusProjectSwagger;