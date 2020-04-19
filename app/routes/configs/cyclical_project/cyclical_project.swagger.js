'use strict'

class CyclicalProjectSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/cyclicalProject:
        *   post:
        *     tags:
        *      - config => cyclical_project
        *     description: SignUp cyclical_project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: cyclical_project Name
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
        * /admin/cyclicalProject:
        *   get:
        *     tags:
        *      - config => cyclical_project
        *     description: get all cyclical_project
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
        *         description : all cyclical_project in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/cyclicalProject:
        *   put:
        *     tags:
        *      - config => cyclical_project
        *     description: update cyclical_project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update cyclical_project Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all cyclical_projects in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/cyclicalProject/:Id:
        *   get:
        *     tags:
        *      - config => cyclical_project
        *     description: get all cyclical_project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in cyclical_project
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all cyclical_project in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/cyclicalProject/:Id:
        *   delete:
        *     tags:
        *      - config => cyclical_project
        *     description: get all cyclical_project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in cyclical_project
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all cyclical_project in db       
        *         example : 
        *           message : array
        */`
    };
}

module.exports = CyclicalProjectSwagger;