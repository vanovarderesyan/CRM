'use strict'

class TypeContactSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/typeContact:
        *   post:
        *     tags:
        *      - config => type_contact
        *     description: SignUp type_contact
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: type_contact Name
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
        * /admin/typeContact:
        *   get:
        *     tags:
        *      - config => type_contact
        *     description: get all typeContact
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
        *         description : all typeContact in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/typeContact:
        *   put:
        *     tags:
        *      - config => type_contact
        *     description: update type_contact
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update type_contact Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all type_contacts in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/typeContact/:Id:
        *   get:
        *     tags:
        *      - config => type_contact
        *     description: get all typeContact
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeContact
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeContact in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/typeContact/:Id:
        *   delete:
        *     tags:
        *      - config => type_contact
        *     description: delete typeContact
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeContact
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeContact in db       
        *         example : 
        *           message : array
        */`
    };
}

module.exports = TypeContactSwagger;