'use strict'

class DepartmentSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/department:
        *   post:
        *     tags:
        *      - config => department
        *     description: SignUp department
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: department Name
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
        * /admin/department:
        *   get:
        *     tags:
        *      - config => department
        *     description: get all department
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
        *         description : all department in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/department:
        *   put:
        *     tags:
        *      - config => department
        *     description: update department
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update department Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all departments in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/department/:Id:
        *   get:
        *     tags:
        *      - config => department
        *     description: get all department
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in department
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all department in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/department/:Id:
        *   delete:
        *     tags:
        *      - config => department
        *     description: delete department
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in department
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all department in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = DepartmentSwagger;