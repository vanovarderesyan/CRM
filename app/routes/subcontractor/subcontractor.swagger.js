'use strict'

class SubcontractorSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/subcontractor:
        *   post:
        *     tags:
        *      - subcontractor
        *     description: SignUp subcontractor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: subcontractor Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {Name: string, Surname: string, UserId: number,  LastName: string,"Contact" : [{"ContactTypeId" : number,"Text" : String}]}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get signUpContact() {
        return `/**
        * @swagger
        * /admin/subcontractor/contact/:Id:
        *   post:
        *     tags:
        *      - subcontractor
        *     description: SignUp subcontractor contact
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: subcontractor 
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

    static get signUpContracts() {
        return `/**
        * @swagger
        * /admin/subcontractor/contracts:
        *   post:
        *     tags:
        *      - subcontractor
        *     description: SignUp subcontractor Contracts
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: subcontractor 
        *         in:  body
        *         required: true
        *         type: string
        *         example : { "SubcontractorId": number,"Contracts" : string}
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
        * /admin/subcontractor:
        *   get:
        *     tags:
        *      - subcontractor
        *     description: get all subcontractor
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
        *         description : all subcontractor in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/subcontractor:
        *   put:
        *     tags:
        *      - subcontractor
        *     description: update subcontractor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update subcontractor Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : {Name: string, Surname: string,  LastName: string,Contracts : string,SphereActivityId: number,Comments : string"}
        *     responses:
        *       200:   
        *         description : all subcontractors in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/subcontractor/:Id:
        *   get:
        *     tags:
        *      - subcontractor
        *     description: get all subcontractor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in subcontractor
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all subcontractor in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/subcontractor/:Id:
        *   delete:
        *     tags:
        *      - subcontractor
        *     description: get all subcontractor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in subcontractor
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all subcontractor in db       
        *         example : 
        *           message : array
        */`
    };

    static get searchCompany() {
        return `/**
        * @swagger
        * /admin/subcontractors/query?Name=m&SphereActivityId=1:
        *   get:
        *     tags:
        *      - subcontractor
        *     description: search subcontractor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
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
        * /admin/subcontractors/projects/:Id:
        *   get:
        *     tags:
        *      - subcontractor
        *     description: search subcontractor
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *     responses:
        *       200:
        *         description : result => company        
        *         example : 
        *           message : int
        */`
    };
}

module.exports = SubcontractorSwagger;