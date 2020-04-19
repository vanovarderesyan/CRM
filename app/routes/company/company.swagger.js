'use strict'

class CompanySwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/company:
        *   post:
        *     tags:
        *      - company
        *     description: SignUp company
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: company Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : { "Resident": number,"Surname" : string,Contracts : string,SphereActivityId: number,Comments : string,"CompanyTypeId" : number,"Denomination" : string,"DiscountSize" : number,"Partner" : number,"Contact" : [{"ContactTypeId" : number,"Text" : String}]}
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
        * /admin/company/contact/:Id:
        *   post:
        *     tags:
        *      - company
        *     description: SignUp company
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: company Name
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
        * /admin/company/contracts:
        *   post:
        *     tags:
        *      - company
        *     description: SignUp company Contracts
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: company 
        *         in:  body
        *         required: true
        *         type: string
        *         example : { "CompanyId": number,"Contracts" : string}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get signUpFilial() {
        return `/**
        * @swagger
        * /admin/company/filial:
        *   post:
        *     tags:
        *      - company
        *     description: SignUp filial
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: filial Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : { "CompanyId": number,"Name" : string}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int(FilialId)
        */`
    };

    static get signUpDepartment() {
        return `/**
        * @swagger
        * /admin/company/department:
        *   post:
        *     tags:
        *      - company
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
        *         example : { "CompanyId": number,"Name" : string}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int(DepartamentId)
        */`
    };

    static get signUpDepartmentFilial() {
        return `/**
        * @swagger
        * /admin/company/filial/department:
        *   post:
        *     tags:
        *      - company
        *     description: SignUp filial department
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
        *         example : { "FilialId": number,"Name" : string}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int(DepartamentId)
        */`
    };

    static get signUpDepartmentManager() {
        return `/**
        * @swagger
        * /admin/company/department/manager:
        *   post:
        *     tags:
        *      - company
        *     description: SignUp manager department
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
        *         example : {ManagerId: number, CompanyId : number}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int(ManagerId)
        */`
    };


    static get signUpFilailManager() {
        return `/**
        * @swagger
        * /admin/company/filial/manager:
        *   post:
        *     tags:
        *      - company
        *     description: SignUp manager filail
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
        *         example : {ManagerId: number, CompanyId : number}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int(ManagerId)
        */`
    };


    static get signManager() {
        return `/**
        * @swagger
        * /admin/company/manager:
        *   post:
        *     tags:
        *      - company
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
        *         example : {ManagerId: number, CompanyId : number}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get searchCompany() {
        return `/**
        * @swagger
        * /admin/companys/query?Name=m&SphereActivityId=1:
        *   get:
        *     tags:
        *      - company
        *     description: search company
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

    static get getAll() {
        return `/**
        * @swagger
        * /admin/company:
        *   get:
        *     tags:
        *      - company
        *     description: get all company
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
        *         description : all company in db       
        *         example : 
        *           message : array
        */`
    };

    static get getAllBySphereActivityId() {
        return `/**
        * @swagger
        * /admin/company/SphereActivityId/:Id:
        *   get:
        *     tags:
        *      - company
        *     description: get all company
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in company SphereActivity
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all company in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/company:
        *   put:
        *     tags:
        *      - company
        *     description: update company
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update company  
        *         in:  body
        *         required: true
        *         type: object
        *         example : {"Id" : Number,"Resident" : number,"CompanyTypeId" : number,"Denomination": string,"Partner": number,"Contracts"  : string,"SphereActivityId"  : number,"DiscountSize" : number,Comments : string}
        *     responses:
        *       200:   
        *         description : all companys in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/company/:Id:
        *   get:
        *     tags:
        *      - company
        *     description: get all company
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in company
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all company in db       
        *         example : 
        *           message : array
        */`
    };

    static get getFilialByCompanyId() {
        return `/**
        * @swagger
        * /admin/company/filial/:Id:
        *   get:
        *     tags:
        *      - company
        *     description: get all filial
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in company
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all company in db       
        *         example : 
        *           message : array
        */`
    };

    static get getDepartmentByFilialId() {
        return `/**
        * @swagger
        * /admin/company/department/filial/:Id:
        *   get:
        *     tags:
        *      - company
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
        *         description: Id in filial
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all company in db       
        *         example : 
        *           message : array
        */`
    };

    static get getManagerByCompanyId() {
        return `/**
        * @swagger
        * /admin/company/manager/:Id:
        *   get:
        *     tags:
        *      - company
        *     description: get all filial
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in company
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all company in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/company/:Id:
        *   delete:
        *     tags:
        *      - company
        *     description: get all company
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in company
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all company in db       
        *         example : 
        *           message : array
        */`
    };   
}

module.exports = CompanySwagger;