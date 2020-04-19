'use strict'

class PayMethodSwagger {
    static get signUp() {
        return `/**
        * @swagger
        * /admin/PayMethod:
        *   post:
        *     tags:
        *      - config => pay_method
        *     description: SignUp PayMethod
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: PayMethod Name
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
        * /admin/PayMethod:
        *   put:
        *     tags:
        *      - config => pay_method
        *     description: update PayMethod
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update PayMethod name
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
        * /admin/PayMethod:
        *   get:
        *     tags:
        *      - config => pay_method
        *     description: get all PayMethod
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
        *         description : all PayMethod in db       
        *         example : 
        *           message : array
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/PayMethod/:Id:
        *   get:
        *     tags:
        *      - config => pay_method
        *     description: get all PayMethod
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in PayMethod
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all PayMethod in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/PayMethod/:Id:
        *   delete:
        *     tags:
        *      - config => pay_method
        *     description: delete PayMethod
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in PayMethod
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all PayMethod in db       
        *         example : 
        *           message : array
        */`
    };
}

module.exports = PayMethodSwagger;