'use strict'

class FilialSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/filial:
        *   post:
        *     tags:
        *      - config => filial
        *     description: SignUp filial
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: filial Name
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
        * /admin/filial:
        *   get:
        *     tags:
        *      - config => filial
        *     description: get all filial
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
        *         description : all filial in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/filial:
        *   put:
        *     tags:
        *      - config => filial
        *     description: update filial
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update filial Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all filials in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/filial/:Id:
        *   get:
        *     tags:
        *      - config => filial
        *     description: get all filial
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in filial
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all filial in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/filial/:Id:
        *   delete:
        *     tags:
        *      - config => filial
        *     description: delete filial
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in filial
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all filial in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = FilialSwagger;