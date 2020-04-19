'use strict'

class ManagerSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/manager:
        *   post:
        *     tags:
        *      - manager
        *     description: SignUp manager
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: manager Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {Name: string, Surname: string,  LastName: string,Contracts : string,SphereActivityId: number,Comments : string",Contact" : [{"ContactTypeId" : number,"Text" : String}]}
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
        * /admin/manager:
        *   get:
        *     tags:
        *      - manager
        *     description: get all manager
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
        *         description : all manager in db       
        *         example : 
        *           message : array
        */`
    };

    static get signUpContact() {
        return `/**
        * @swagger
        * /admin/manager/contact/:Id:
        *   post:
        *     tags:
        *      - manager
        *     description: SignUp manager contact
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: manager 
        *         in:  body
        *         required: true
        *         type: string
        *         example : { "ContactTypeId": number,"Text" : string}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/manager:
        *   put:
        *     tags:
        *      - manager
        *     description: update manager
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update manager Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : {Name: string, Surname: string,  LastName: string,Contracts : string,SphereActivityId: number,Comments : string"}
        *     responses:
        *       200:   
        *         description : all managers in db          
        *         example : 
        *           message : string
        */`
    };


    static get signUpContracts() {
        return `/**
        * @swagger
        * /admin/manager/contracts:
        *   post:
        *     tags:
        *      - manager
        *     description: SignUp manager Contracts
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: manager 
        *         in:  body
        *         required: true
        *         type: string
        *         example : { "ManagerId": number,"Contracts" : string}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };


    static get getOne() {
        return `/**
        * @swagger
        * /admin/manager/:Id:
        *   get:
        *     tags:
        *      - manager
        *     description: get all manager
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in manager
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all manager in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/manager/:Id:
        *   delete:
        *     tags:
        *      - manager
        *     description: get all manager
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in manager
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all manager in db       
        *         example : 
        *           message : array
        */`
    };

    static get searchManager() {
        return `/**
        * @swagger
        * /admin/manager/query?Name=m&SphereActivityId=1:
        *   get:
        *     tags:
        *      - manager
        *     description: search company
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
        *         description : result => company        
        *         example : 
        *           message : int
        */`
    };

    static get getAllProject() {
        return `/**
        * @swagger
        * /admin/managers/projects/:Id:
        *   get:
        *     tags:
        *      - manager
        *     description: search company
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
        *         description : result => company        
        *         example : 
        *           message : int
        */`
    };

}

module.exports = ManagerSwagger;