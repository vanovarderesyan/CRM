'use strict'

class TypeCompanySwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/typeCompany:
        *   post:
        *     tags:
        *      - config => type_company
        *     description: SignUp typeCompany
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: typeCompany Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : {Name: name}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId,
        *         example : 
        *           message : int
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/typeCompany:
        *   put:
        *     tags:
        *      - config => type_company
        *     description: update typeCompany
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update typeCompany name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:      
        *         example : 
        *           message : string
        */`
    };

    static get getAll() {
        return `/**
        * @swagger
        * /admin/typeCompany:
        *   get:
        *     tags:
        *      - config => type_company
        *     description: get all typeCompany
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
        *         description : all typeCompanies in db       
        *         example : 
        *           message : array
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/typeCompany/:Id:
        *   get:
        *     tags:
        *      - config => type_company
        *     description: get all typeCompany
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeCompany
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeCompany in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/typeCompany/:Id:
        *   delete:
        *     tags:
        *      - config => type_company
        *     description: delete typeCompany
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeCompany
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeCompany in db       
        *         example : 
        *           message : array
        */`
    };
}

module.exports = TypeCompanySwagger;