const Joi = require("joi");

class ProjectInterface {
//Неправильный формат поля Даты
    static get signUp() {

        // d.Name as ClientDepartamentName,
        // man.Name as ClientMainManagerName,
        // fil.Name as ClientFilialName,
        // com.Denomination as ClientName,
        // cus.Denomination as CustomerName,
        // cusd.Name as CustomerDepartmentName,
        // cusfil.Name as CustomerFilialName,
        // cusman.Name as CustomerMainManager,
        return Joi.object().keys({
            "Name": Joi.string().min(1).max(244).required(),
            "Number"  : Joi.string().min(1).required(),
            "StatusId":Joi.number().min(1).allow(null),
            "GeneralProjectId":Joi.number().min(1).allow(null),
            "FormatId":Joi.number().min(1).required(),
            "Tender" : Joi.number().min(0).max(1).required(),
            "CyclicityId" : Joi.number().min(1).required(),
            "ClientId" : Joi.number().min(1).allow(null),           
            "CustomerId" : Joi.number().min(1).required() ,
            "SaleTypeId" :Joi.number().min(1).required(),
            "ProjectTypeId" :Joi.number().min(1).required(),
            "ProjectTaskId" :Joi.number().min(1).allow(null),
            "RequestDate" : Joi.date().required().error(new Error('Неправильный формат поля Даты')),
            "ProjectFinishDate" :Joi.date().allow(null).error(new Error('Неправильный формат поля Даты')),
            "Projectdate" :Joi.string().allow(null).error(new Error('Неправильный формат поля Даты')) ,
            "ProjectDuration":Joi.number().allow(null),
            "FollowUp" :Joi.date().allow(null).error(new Error('Неправильный формат поля Даты')),
            "SaleManagerId" :Joi.number().min(1).allow(null),
            "ManagerProjectId":Joi.number().min(1).allow(null),
            "BudgetForClient" :Joi.number().allow(null),
            "Budget" :Joi.number().allow(null),
            "PayMethodId" :Joi.number().min(1).allow(null),
            "CountryId" :Joi.number().min(1).allow(null),
            "CityId" :Joi.number().min(1).allow(null),
            "AreaId" : Joi.number().min(1).allow(null),
            "IndoorOutdoorId" : Joi.number().min(1).allow(null),
            "CountParticipants" :Joi.number().required(),
            "ChildManagerClient" : Joi.array().items(Joi.number()),
            "ChildManagerCustomer" : Joi.array().items(Joi.number()),
            "Employee" : Joi.array().items(Joi.number()),
            "Subcontractor" : Joi.array().items(Joi.number()),
            "ClientDepartmentId"  : Joi.number().min(1).allow(null),
            "ClientFilialId"  : Joi.number().min(1).allow(null),
            "ClientMainManagerId"  : Joi.number().min(1).allow(null),            
            "CustomerDepartmentId"  : Joi.number().min(1).allow(null),
            "CustomerFilialId"  : Joi.number().min(1).allow(null),
            "CustomerMainManagerId"  : Joi.number().min(1).required(), 
            "DepartmentId"  : Joi.number().min(1).required()
        })
    };

    static get update() {
        return Joi.object().keys({
            "Id" :Joi.number().min(1).required(), 
            "Name": Joi.string().min(1).max(244).required(),
            "Number"  : Joi.string().min(1).allow(null),
            "StatusId":Joi.number().min(1).allow(null),
            "GeneralProjectId":Joi.number().min(1).allow(null),
            "FormatId":Joi.number().min(1).required(),
            "Tender" : Joi.number().min(0).max(1).required(),
            "CyclicityId" : Joi.number().min(1).required(),
            "ClientId" : Joi.number().min(1).allow(null),           
            "CustomerId" : Joi.number().min(1).required() ,
            "SaleTypeId" :Joi.number().min(1).required(),
            "ProjectTypeId" :Joi.number().min(1).required(),
            "ProjectTaskId" :Joi.number().min(1).allow(null),
            "RequestDate" : Joi.date().allow(null).error(new Error('Неправильный формат поля Даты')),
            "ProjectFinishDate" :Joi.date().allow(null).error(new Error('Неправильный формат поля Даты')),
            "Projectdate" :Joi.string().allow(null) ,
            "ProjectDuration":Joi.number().allow(null),
            "FollowUp" :Joi.date().allow(null).error(new Error('Неправильный формат поля Даты')),
            "SaleManagerId" :Joi.number().min(1).allow(null),
            "ManagerProjectId":Joi.number().min(1).allow(null),
            "BudgetForClient" :Joi.number().allow(null),
            "Budget" :Joi.number().allow(null),
            "PayMethodId" :Joi.number().min(1).allow(null),
            "CountryId" :Joi.number().min(1).allow(null),
            "CityId" :Joi.number().min(1).allow(null),
            "AreaId" : Joi.number().min(1).allow(null),
            "IndoorOutdoorId" : Joi.number().min(1).allow(null),
            "CountParticipants" :Joi.number().required(),
            "ChildManagerClient" : Joi.array().items(Joi.number()),
            "ChildManagerCustomer" : Joi.array().items(Joi.number()),
            "Employee" : Joi.array().items(Joi.number()),
            "Subcontractor" : Joi.array().items(Joi.number()),
            "ClientDepartmentId"  : Joi.number().min(1).allow(null),
            "ClientFilialId"  : Joi.number().min(1).allow(null),
            "ClientMainManagerId"  : Joi.number().min(1).allow(null),            
            "CustomerDepartmentId"  : Joi.number().min(1).allow(null),
            "CustomerFilialId"  : Joi.number().min(1).allow(null),
            "CustomerMainManagerId"  : Joi.number().min(1).required(), 
            "DepartmentId"  : Joi.number().min(1).required()
        })
    };

    static get signUpProjectManagerCompany(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "ManagerId":Joi.number().min(1).required() ,
            "CompanyId":Joi.number().min(1).required(),
            "IsClient" : Joi.number().min(0).max(1).required()
        })
    }

    static get signUpSubcontractor(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "SubcontractorId":Joi.number().min(1).required()
        })
    }

    static get getProjectNumber(){
        return Joi.object().keys({
            "DepartmentName":Joi.string().min(1).required(),
            "ProjectYear" :Joi.string().required() ,
        })
    }

    

    static get signUpEmployee(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "EmployeeId":Joi.number().min(1).required()
        })
    }
 
    static get deleteManager(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "ManagerId":Joi.number().min(1).required(),
            "CompanyId":Joi.number().min(1).required(),
            "IsClient" : Joi.number().min(0).max(1).required()
        })
    }


    static get deleteSubcontractor(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "SubcontractorId":Joi.number().min(1).required()
        })
    }

    static get deleteEmployee(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "EmployeeId":Joi.number().min(1).required()
        })
    }

    static get signUpProjectDate(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "ProjectDate":Joi.date().required().error(new Error('Неправильный формат поля Даты'))
        })
    }

    static get updateProjectName(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "Name":Joi.date().required().error(new Error('Неправильный формат поля Даты'))
        })
    }

    static get signUpProjectComment(){
        return Joi.object().keys({
            "ProjectId" :Joi.number().min(1).required(), 
            "Name":Joi.string().required()
        })
    }

   
    static get projectFiltr() {
        return Joi.object().keys({
            "Name": Joi.string().allow(''),//+
            "StatusId":Joi.array().items(Joi.number()).allow([]),//+
            "FormatId":Joi.array().items(Joi.number()).allow([]),//+
            "Tender" : Joi.number().allow(''),//
            "ClientId" : Joi.array().items(Joi.number()).allow([]),           //+
            "CustomerId" : Joi.array().items(Joi.number()).allow([]),//+
            "SaleTypeId" :Joi.array().items(Joi.number()).allow([]),//+
            "ProjectTypeId" :Joi.array().items(Joi.number()).allow([]),//+
            "ProjectTaskId" :Joi.array().items(Joi.number()).allow([]),//+
            "ManagerProjectId":Joi.array().items(Joi.number()).allow([]),//+
            "SaleManagerId" :Joi.array().items(Joi.number()).allow([]), 
            "CountryId" :Joi.array().items(Joi.number()).allow([]),//+
            "CityId" :Joi.array().items(Joi.number()).allow([]),//+
            "AreaId" : Joi.array().items(Joi.number()).allow([]),//+
            "IndoorOutdoorId" : Joi.array().items(Joi.number()).allow([]),//+
            "CountParticipantsStart" :Joi.number().allow(''),//+
            "CountParticipantsEnd" :Joi.number().allow(''),//+
            "FollowUpStart" :Joi.date().allow('').error(new Error('Неправильный формат поля Даты')),
            "FollowUpEnd" :Joi.date().allow('').error(new Error('Неправильный формат поля Даты')),
            "RequestDateStart" : Joi.date().allow('').error(new Error('Неправильный формат поля Даты')),
            "RequestDateEnd" : Joi.date().allow('').error(new Error('Неправильный формат поля Даты')),
            "ProjectFinishDateStart" :Joi.date().allow('').error(new Error('Неправильный формат поля Даты')),//+
            "ProjectFinishDateEnd" :Joi.date().allow('').error(new Error('Неправильный формат поля Даты')),//+
            "ProjectdateStart" :Joi.date().allow('').error(new Error('Неправильный формат поля Даты')) ,//+
            "ProjectdateEnd" :Joi.date().allow('').error(new Error('Неправильный формат поля Даты')) ,//+
            "ProjectDuration":Joi.number().allow(''),
            "SphereActivityId": Joi.array().items(Joi.number()).allow([]),
            "DepartmentId"  : Joi.array().items(Joi.number()).allow([])//+
        })
    };
}

module.exports = ProjectInterface;
