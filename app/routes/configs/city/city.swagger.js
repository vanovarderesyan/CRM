'use strict'

class CitySwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/city:
        *   post:
        *     tags:
        *      - config => city
        *     description: SignUp city
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: city Name
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
        * /admin/city:
        *   get:
        *     tags:
        *      - config => city
        *     description: get all city
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
        *         description : all city in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/city:
        *   put:
        *     tags:
        *      - config => city
        *     description: update city
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update city Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all citys in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/city/:Id:
        *   get:
        *     tags:
        *      - config => city
        *     description: get all city
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in city
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all city in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/city/:Id:
        *   delete:
        *     tags:
        *      - config => city
        *     description: get all city
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in city
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all city in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = CitySwagger;