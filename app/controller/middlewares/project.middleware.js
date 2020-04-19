"use strict";

const Schema = require("../interfaces/project.interface");
const Interface = require("../../service/interface.service");


class ProjectMW {
    static signUp(req, res, next) {
        req.checkInterface = Schema.signUp;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static update(req, res, next) {
        req.checkInterface = Schema.update;
        req.checkObject = req.body;
        Interface.checker(req, next);
    };

    static signUpProjectManagerCompany(req,res,next){
        req.checkInterface = Schema.signUpProjectManagerCompany;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }

    static signUpSubcontractor(req,res,next){
        req.checkInterface = Schema.signUpSubcontractor;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }

    static signUpEmployee(req,res,next){
        req.checkInterface = Schema.signUpEmployee;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }


    static deleteManager(req,res,next){
        req.checkInterface = Schema.deleteManager;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }

    static deleteSubcontractor(req,res,next){
        req.checkInterface = Schema.deleteSubcontractor;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }


    static deleteEmployee(req,res,next){
        req.checkInterface = Schema.deleteEmployee;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }

    static signUpProjectDate(req,res,next){
        req.checkInterface = Schema.signUpProjectDate;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }


    static updateProjectName(req,res,next){
        req.checkInterface = Schema.updateProjectName;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }

    static signUpProjectComment(req,res,next){
        req.checkInterface = Schema.signUpProjectComment;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }

    static projectFiltr (req,res,next){
        req.checkInterface = Schema.projectFiltr;
        req.checkObject = req.query;
        Interface.checker(req, next); 
    }

    static getProjectNumber (req,res,next){
        req.checkInterface = Schema.getProjectNumber;
        req.checkObject = req.body;
        Interface.checker(req, next); 
    }
}

module.exports = { ProjectMW };