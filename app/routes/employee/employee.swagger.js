'use strict'

class EmployeeSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/employee:
        *   post:
        *     tags:
        *      - employee
        *     description: SignUp employee
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: employee Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {Name: string, Surname: string, PositionId: number,  Username: string, Password: string,	"Contact" : [{"ContactTypeId" : number,"Text" : String}]}
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
        * /admin/employee/contact/:Id:
        *   post:
        *     tags:
        *      - employee
        *     description: SignUp employee contact
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: employee
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
    
    static get getAll() {
        return `/**
        * @swagger
        * /admin/employee:
        *   get:
        *     tags:
        *      - employee
        *     description: get all employee
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
        *         description : all employee in db       
        *         example : 
        *           message : array
        */`
    };

        
    static get getAll() {
        return `/**
        * @swagger
        * /admin/employees/projects/:Id:
        *   get:
        *     tags:
        *      - employee
        *     description: get all employee
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
        *         description : all employee in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/employee:
        *   put:
        *     tags:
        *      - employee
        *     description: update employee
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update employee Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : {Id : number,Name: string, Surname: string, PositionId: number,  Username: string, Password: string}
        *     responses:
        *       200:   
        *         description : all employees in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/employee/:Id:
        *   get:
        *     tags:
        *      - employee
        *     description: get all employee
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in employee
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all employee in db       
        *         example : 
        *           message : array
        */`
    };


    static get getByPositionId() {
        return `/**
        * @swagger
        * /admin/employee/position/:Id:
        *   get:
        *     tags:
        *      - employee
        *     description: get all employee by position Id
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in position
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all employee in db       
        *         example : 
        *           message : array
        */`
    };

    static get signUpImageEmployee() {
        return `/**
        * @swagger
        * /admin/employee/image/:Id:
        *   post:
        *     tags:
        *      - employee
        *     description: get all employee
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in employee
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all employee in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/employee/:Id:
        *   delete:
        *     tags:
        *      - employee
        *     description: get all employee
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in employee
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all employee in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = EmployeeSwagger;