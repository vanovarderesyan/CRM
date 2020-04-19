'use strict'

class PositionEmployeesSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/positionEmployees:
        *   post:
        *     tags:
        *      - config => position_employees
        *     description: SignUp position_employees
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: position_employees Name
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
        * /admin/positionEmployees:
        *   get:
        *     tags:
        *      - config => position_employees
        *     description: get all position_employees
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
        *         description : all position_employees in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/positionEmployees:
        *   put:
        *     tags:
        *      - config => position_employees
        *     description: update position_employees
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update position_employees Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all position_employeess in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/positionEmployees/:Id:
        *   get:
        *     tags:
        *      - config => position_employees
        *     description: get all position_employees
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in position_employees
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all position_employees in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/positionEmployees/:Id:
        *   delete:
        *     tags:
        *      - config => position_employees
        *     description: delete position_employees
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in position_employees
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all position_employees in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = PositionEmployeesSwagger;