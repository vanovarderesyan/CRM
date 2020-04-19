'use strict'

class IndoorOutdoorSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/indoor_outdoor:
        *   post:
        *     tags:
        *      - config => indoor_outdoor
        *     description: SignUp indoor_outdoor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: indoor_outdoor Name
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
        * /admin/indoor_outdoor:
        *   get:
        *     tags:
        *      - config => indoor_outdoor
        *     description: get all indoor_outdoor
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
        *         description : all indoor_outdoor in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/indoor_outdoor:
        *   put:
        *     tags:
        *      - config => indoor_outdoor
        *     description: update indoor_outdoor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update indoor_outdoor Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all indoor_outdoors in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/indoor_outdoor/:Id:
        *   get:
        *     tags:
        *      - config => indoor_outdoor
        *     description: get all indoor_outdoor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in indoor_outdoor
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all indoor_outdoor in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/indoor_outdoor/:Id:
        *   delete:
        *     tags:
        *      - config => indoor_outdoor
        *     description: delete indoor_outdoor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in indoor_outdoor
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all indoor_outdoor in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = IndoorOutdoorSwagger;