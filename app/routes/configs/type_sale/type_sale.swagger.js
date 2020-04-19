'use strict'

class TypeSaleSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/typeSale:
        *   post:
        *     tags:
        *      - config => type_sale
        *     description: SignUp type_sale
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: type_sale Name
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
        * /admin/typeSale:
        *   get:
        *     tags:
        *      - config => type_sale
        *     description: get all typeSale
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
        *         description : all typeSale in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/typeSale:
        *   put:
        *     tags:
        *      - config => type_sale
        *     description: update type_sale
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update type_sale Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all type_sales in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/typeSale/:Id:
        *   get:
        *     tags:
        *      - config => type_sale
        *     description: get all typeSale
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeSale
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeSale in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/typeSale/:Id:
        *   delete:
        *     tags:
        *      - config => type_sale
        *     description: delete typeSale
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in typeSale
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all typeSale in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = TypeSaleSwagger;