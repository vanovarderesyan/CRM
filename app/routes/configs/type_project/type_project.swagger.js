'use strict'

class TypeProjectSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/typeProject:
        *   post:
        *     tags:
        *      - config => type_project
        *     description: SignUp type_project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: type_project Name
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
        * /admin/typeProject:
        *   get:
        *     tags:
        *      - config => type_project
        *     description: get all typeProject
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
        *         description : all typeProject in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/typeProject:
        *   put:
        *     tags:
        *      - config => type_project
        *     description: update type_project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update type_project Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all type_projects in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/typeProject/:Id:
        *   get:
        *     tags:
        *      - config => type_project
        *     description: get all typeProject
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeProject
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
        * /admin/typeProject/:Id:
        *   delete:
        *     tags:
        *      - config => type_project
        *     description: delete typeProject
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeProject
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

module.exports = TypeProjectSwagger;