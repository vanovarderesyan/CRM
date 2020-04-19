'use strict'

class ProjectTaskSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/project_task:
        *   post:
        *     tags:
        *      - config => project_task
        *     description: SignUp project_task
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project_task Name
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
        * /admin/project_task:
        *   get:
        *     tags:
        *      - config => project_task
        *     description: get all project_task
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
        *         description : all project_task in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/project_task:
        *   put:
        *     tags:
        *      - config => project_task
        *     description: update project_task
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update project_task Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all project_tasks in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/project_task/:Id:
        *   get:
        *     tags:
        *      - config => project_task
        *     description: get all project_task
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in project_task
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all project_task in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/project_task/:Id:
        *   delete:
        *     tags:
        *      - config => project_task
        *     description: delete project_task
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in project_task
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all project_task in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = ProjectTaskSwagger;