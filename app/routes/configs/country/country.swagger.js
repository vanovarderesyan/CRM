'use strict'

class CountrySwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/country:
        *   post:
        *     tags:
        *      - config => country
        *     description: SignUp country
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: country Name
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
        * /admin/country:
        *   get:
        *     tags:
        *      - config => country
        *     description: get all country
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
        *         description : all country in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/country:
        *   put:
        *     tags:
        *      - config => country
        *     description: update country
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update country Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all country in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/country/:Id:
        *   get:
        *     tags:
        *      - config => country
        *     description: get all country
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in country
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all country in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/country/:Id:
        *   delete:
        *     tags:
        *      - config => country
        *     description: get all country
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in country
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all country in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = CountrySwagger;