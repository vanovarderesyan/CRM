'use strict'

class FormatProjectSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/formatProject:
        *   post:
        *     tags:
        *      - config => format_project
        *     description: SignUp formatProject
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: formatProject Name
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
        * /admin/formatProject:
        *   get:
        *     tags:
        *      - config => format_project
        *     description: get all formatProject
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
        *         description : all formatProject in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/formatProject:
        *   put:
        *     tags:
        *      - config => format_project
        *     description: update formatProject
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update formatProject Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all formatProjects in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/formatProject/:Id:
        *   get:
        *     tags:
        *      - config => format_project
        *     description: get all formatProject
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in formatProject
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all formatProject in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/formatProject/:Id:
        *   delete:
        *     tags:
        *      - config => format_project
        *     description: delete formatProject
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in formatProject
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all formatProject in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = FormatProjectSwagger;