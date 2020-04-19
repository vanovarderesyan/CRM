'use strict'

class ProjectSwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/project:
        *   post:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {"Name": string().required(),"StatusId":number().required() ,"GeneralProjectId":number(),"FormatId":number().required(),"Tender" : number(),"CyclicityId" : number().required(),"DepartmentId"  : number().required(),"ClientId" : number(),"CustomerId" : number().required() ,"SubContractorId" :number(),"SaleTypeId" :number().required(),"ProjectTypeId" :number().required(),"ProjectTaskId" :number(),"RequestDate" : date(),"ProjectFinishDate" :date(),"Projectdate" :date() ,"ProjectDuration":number(),"FollowUp" :date(),"SaleManagerId" :number(),"ManagerProjectId":number(),"DigitalManagerId":number() ,"ScreenWriterId" :number(),"BudgetForClient" :number(),"Budget" :number(),"PayMethodId" :number().required(),"CountryId" :number().required(),"CityId" :number().required(),"AreaId" : number().required() ,"IndoorOutdoorId" : number(),"CountParticipants" :number().required(),"Comment":string()}
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
        * /admin/project:
        *   get:
        *     tags:
        *      - project
        *     description: get all project
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
        *         description : all project in db       
        *         example : 
        *           message : array
        */`
    };


    // "Name": Joi.string().allow(''),//+
    // "StatusId":Joi.array().items(Joi.number()).allow([]),//+
    // "FormatId":Joi.array().items(Joi.number()).allow([]),//+
    // "Tender" : Joi.number().allow(''),//
    // "ClientId" : Joi.array().items(Joi.number()).allow([]),           //+
    // "CustomerId" : Joi.array().items(Joi.number()).allow([]),//+
    // "SaleTypeId" :Joi.array().items(Joi.number()).allow([]),//+
    // "ProjectTypeId" :Joi.array().items(Joi.number()).allow([]),//+
    // "ProjectTaskId" :Joi.array().items(Joi.number()).allow([]),//+
    // "ManagerProjectId":Joi.array().items(Joi.number()).allow([]),//+
    // "SaleManagerId" :Joi.array().items(Joi.number()).allow([]), 
    // "CountryId" :Joi.array().items(Joi.number()).allow([]),//+
    // "CityId" :Joi.array().items(Joi.number()).allow([]),//+
    // "AreaId" : Joi.array().items(Joi.number()).allow([]),//+
    // "IndoorOutdoorId" : Joi.array().items(Joi.number()).allow([]),//+
    // "CountParticipantsStart" :Joi.number().allow(''),//+
    // "CountParticipantsEnd" :Joi.number().allow(''),//+
    // "FollowUpStart" :Joi.date().allow(''),
    // "FollowUpEnd" :Joi.date().allow(''),
    // "RequestDateStart" : Joi.date().allow(''),
    // "RequestDateEnd" : Joi.date().allow(''),
    // "ProjectFinishDateStart" :Joi.date().allow(''),//+
    // "ProjectFinishDateEnd" :Joi.date().allow(''),//+
    // "ProjectdateStart" :Joi.date().allow('') ,//+
    // "ProjectdateEnd" :Joi.date().allow('') ,//+
    // "ProjectDuration":Joi.number().allow(''),
    // "SphereActivityId": Joi.array().items(Joi.number()).allow([]),
    // "DepartmentId"  : Joi.array().items(Joi.number()).allow([])//+
    static get getAll() {
        return `/**
        * @swagger
        * /admin/projects/query?Name=name&CountryId=[2]&FormatId=[2]&Tender=1&ClientId=[]&CustomerId=[]&SaleTypeId=[]&ProjectTypeId=[]&ProjectTaskId=[]&ManagerProjectId=[]&CountryId=[]&CityId=[]&AreaId=[]&IndoorOutdoorId=[]&CountParticipants=6&RequestDate=''&ProjectFinishDate=''&Projectdate=''&ProjectDuration=5&FollowUp=''&DepartmentId='':
        *   get:
        *     tags:
        *      - project
        *     description: get all project
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
        *         description : all project in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/project:
        *   put:
        *     tags:
        *      - project
        *     description: update project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update project Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : {Id : required(),"Name": string().required(),"StatusId":number().required() ,"GeneralProjectId":number(),"FormatId":number().required(),"Tender" : number(),"CyclicityId" : number().required(),"DepartmentId"  : number().required(),"ClientId" : number(),"CustomerId" : number().required() ,"SubContractorId" :number(),"SaleTypeId" :number().required(),"ProjectTypeId" :number().required(),"ProjectTaskId" :number(),"RequestDate" : date(),"ProjectFinishDate" :date(),"Projectdate" :date() ,"ProjectDuration":number(),"FollowUp" :date(),"SaleManagerId" :number(),"ManagerProjectId":number(),"DigitalManagerId":number() ,"ScreenWriterId" :number(),"BudgetForClient" :number(),"Budget" :number(),"PayMethodId" :number().required(),"CountryId" :number().required(),"CityId" :number().required(),"AreaId" : number().required() ,"IndoorOutdoorId" : number(),"CountParticipants" :number().required(),"Comment":string(),"ClientDepartmentId"  : Joi.number().min(1),"ClientFilialId"  : Joi.number().min(1),"ClientMainManagerId"  : Joi.number().min(1),"CustomerDepartmentId"  : Joi.number().min(1).required(),"CustomerFilialId"  : Joi.number().min(1).required(),"CustomerMainManagerId"  : Joi.number().min(1).required(), }
        *     responses:
        *       200:   
        *         description : all projects in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/project/:Id:
        *   get:
        *     tags:
        *      - project
        *     description: get all project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in project
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all project in db       
        *         example : 
        *           message : array
        */`
    };

    static get signUpCompanyManager() {
        return `/**
        * @swagger
        * /admin/project/company/manager:
        *   post:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {"ProjectId":number().required() ,"ManagerId":number().required(),"CompanyId":number().required()}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get deleteManager() {
        return `/**
        * @swagger
        * /admin/project/company/manager/:ProjectId/:ManagerId/:CompanyId:
        *   delete:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };


    static get signUpSubcontractor() {
        return `/**
        * @swagger
        * /admin/project/subcontractor:
        *   post:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {"ProjectId":number().required() ,"SubcontractorId":number().required()}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get deleteSubcontractor() {
        return `/**
        * @swagger
        * /admin/project/subcontractor/:ProjectId/:SubcontractorId:
        *   delete:
        *     tags:
        *      - project
        *     description: SignUp project
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
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get signUpEmployee() {
        return `/**
        * @swagger
        * /admin/project/employee:
        *   post:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {"ProjectId":number().required() ,"EmployeeId":number().required()}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get signUpProjectDate() {
        return `/**
        * @swagger
        * /admin/project/date:
        *   put:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {"ProjectId":number().required() ,"ProjectDate":date().required()}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get updateProjectName() {
        return `/**
        * @swagger
        * /admin/project/name:
        *   put:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {"ProjectId":number().required() ,"Name":date().required()}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get deleteEmployee() {
        return `/**
        * @swagger
        * /admin/project/employee/:ProjectId/:EmployeeId:
        *   delete:
        *     tags:
        *      - project
        *     description: SignUp project
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
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/project/:Id:
        *   delete:
        *     tags:
        *      - project
        *     description: get all project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in project
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all project in db       
        *         example : 
        *           message : array
        */`
    };

    static get projectCountInformation() {
        return `/**
        * @swagger
        * /admin/project/countInformation/:newRequest/:canceled/:lost:
        *   get:
        *     tags:
        *      - project
        *     description: SignUp project
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
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get getAllName() {
        return `/**
        * @swagger
        * /admin/projects/name:
        *   get:
        *     tags:
        *      - project
        *     description: get all project
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
        *         description : all project in db       
        *         example : 
        *           message : array
        */`
    };

    static get getAllByCompanyId() {
        return `/**
        * @swagger
        * /admin/projects/company/:Id:
        *   get:
        *     tags:
        *      - project
        *     description: get all project
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
        *         description : all project in db       
        *         example : 
        *           message : array
        */`
    };


    static get signUpComment() {
        return `/**
        * @swagger
        * /admin/project/comment:
        *   post:
        *     tags:
        *      - project
        *     description: SignUp project
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: project Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {"ProjectId":number().required() ,"Name":string().required()}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };
}

module.exports = ProjectSwagger;