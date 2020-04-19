'use strict'

class AreasConductSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/areas_conduct:
        *   post:
        *     tags:
        *      - config => areas_conduct
        *     description: SignUp areas_conduct
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: areas_conduct Name
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
        * /admin/areas_conduct:
        *   get:
        *     tags:
        *      - config => areas_conduct
        *     description: get all areas_conduct
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
        *         description : all areas_conduct in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/areas_conduct:
        *   put:
        *     tags:
        *      - config => areas_conduct
        *     description: update areas_conduct
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update areas_conduct Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all areas_conducts in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/areas_conduct/:Id:
        *   get:
        *     tags:
        *      - config => areas_conduct
        *     description: get all areas_conduct
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in areas_conduct
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all areas_conduct in db       
        *         example : 
        *           message : array
        */`
    };
    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/areas_conduct/:Id:
        *   delete:
        *     tags:
        *      - config => areas_conduct
        *     description: delete areas_conduct
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in areas_conduct
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

module.exports = AreasConductSwagger;