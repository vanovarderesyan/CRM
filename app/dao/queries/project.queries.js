"use strict";

class ProjectQueries {
	static get signUp() {
		return  `INSERT INTO  company.project 
        (Id ,
         Name ,
         Number,
         StatusId ,
         GeneralProjectId ,
         FormatId ,
         Tender ,
         CyclicityId ,
         ClientDepartmentId ,
         ClientId ,
         CustomerId ,
         SaleTypeId ,
         ProjectTypeId ,
         ProjectTaskId ,
         RequestDate ,
         ProjectFinishDate ,
         Projectdate ,
         ProjectDuration ,
         FollowUp ,
         SaleManagerId ,
         ManagerProjectId ,
         DigitalManagerId ,
         ScreenWriterId ,
         BudgetForClient ,
         Budget ,
         PayMethodId ,
         CountryId ,
         CityId ,
         AreaId ,
         IndoorOutdoorId ,
         CountParticipants ,
         ClientFilialId,
         ClientMainManagerId,
         CustomerMainManagerId,
         CustomerFilialId,
         CustomerDepartmentId,
         DepartmentId )
        VALUES
        (null,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        date(?),
        date(?),
        ?,
        ?,
        date(?),
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?)`;
	};
//55 tox 17
	static get update() {
		return  `UPDATE project SET 
                    Name  = ?,
                    StatusId  = ?,
                    GeneralProjectId  = ?,
                    FormatId  = ?,
                    Tender  = ?,
                    CyclicityId  = ?,
                    ClientDepartmentId  = ?,
                    ClientId  = ?,
                    CustomerId  = ?,
                    SaleTypeId  = ?,
                    ProjectTypeId  = ?,
                    ProjectTaskId  = ?,
                    RequestDate  = ?,
                    ProjectFinishDate  = ?,
                    Projectdate  = ?,
                    ProjectDuration  = ?,
                    FollowUp  = ?,
                    SaleManagerId  = ?,
                    ManagerProjectId  = ?,
                    DigitalManagerId  = ?,
                    ScreenWriterId  = ?,
                    BudgetForClient  = ?,
                    Budget  = ?,
                    PayMethodId  = ?,
                    CountryId  = ?,
                    CityId  = ?,
                    AreaId  = ?,
                    IndoorOutdoorId  = ?,
                    CountParticipants  = ?,
                    ClientFilialId = ?,
                    ClientMainManagerId = ?,
                    CustomerMainManagerId = ?,
                    CustomerFilialId = ?,
                    CustomerDepartmentId = ?,
                    DepartmentId = ?,
                    Number = ?
                WHERE  Id  = ?`;
    };
    
    static get updateFollowUp() {
		return  `UPDATE company.project SET FollowUp  = ?  WHERE  Id  = ?`;
	};

 //or pt.Name REGEXP "^${json[key]}" or sp.Name REGEXP "^${json[key]}" or fp.Name REGEXP "^${json[key]}" or d.Name REGEXP "^${json[key]}" or com.Denomination REGEXP "^${json[key]}" or cus.Denomination REGEXP "^${json[key]}" or ts.Name REGEXP "^${json[key]}" or tp.Name REGEXP "^${json[key]}" or sm.Name REGEXP "^${json[key]}" or dm.Name REGEXP "^${json[key]}" or wm.Name REGEXP "^${json[key]}" or projectm.Name REGEXP "^${json[key]}" or cy.Name REGEXP "^${json[key]}" or ci.Name REGEXP "^${json[key]}" or ac.Name REGEXP "^${json[key]}" or gp.Name
    static getAllByQuery(query,sphera) {
		return  `select 
        pt.Name as ProjectTaskName,
        sp.Name as StatusName,
        fp.Name as FormatProjectName,
        d.Name as DepartamentName,
        com.Denomination as ClientName,
        cus.Denomination as CustomerName,
        ts.Name as SaleName,
        tp.name as ProjectTypeName,
        sm.name as SaleManagerName,
        sm.Image as SaleManagerImage,
        sm.surname as SaleManagerSurname,
        dm.name as DigitalManagerName,
        projectm.name as ManagerProjectName,
        projectm.Image as ManagerProjectImage,
        projectm.surname as ManagerProjectSurname,
        wm.name as ScreenWriterName,
        pm.Name as PayMethodName,
        cy.name as CountryName,
        ci.name as Cityname,
        ac.name as AreaName,
        id.name as IndoorOutdoorName,
        gp.name as GeneralProjectName,
        man.Name as ClientMainManagerName,
        cusman.Name as CustomerMainManagerName,
        man.Surname as ClientMainManagerSurname,
        cusman.Surname as CustomerMainManagerSuranme,
        p.*
    from
        company.project p
            left join
        company.project_task pt
            on p.ProjectTaskId = pt.Id and p.ProjectTaskId is not null
            left join 
        company.cyclical_project c
            on p.CyclicityId = c.Id
            left join
        company.status_project sp
            on p.StatusId = sp.Id
            left join 
        company.format_project fp
            on p.FormatId = fp.Id
            left join 
        company.department d
            on p.DepartmentId = d.Id
            left join 
        company.company com
            on p.ClientId = com.Id and p.ClientId is not null
            left join 
		company.user usercom
			on com.UserId = usercom.Id
            left join
        company.company cus
            on p.CustomerId = cus.Id and p.CustomerId is not null
            left join
		company.user usercus
			on cus.UserId = usercom.Id
            left join
        company.manager man
			on p.ClientMainManagerId = man.Id
            left join
		company.manager cusman
			on p.CustomerMainManagerId = cusman.Id
            left join
        company.type_sale ts
            on p.SaleTypeId = ts.Id
            left join
        company.type_project tp
            on p.ProjectTypeId = tp.Id
            left join
        company.employee sm
            on p.SaleManagerId = sm.Id
            left join
        company.employee dm
            on p.DigitalManagerId = dm.Id
            left join
        company.employee wm
            on p.ScreenWriterId = wm.Id
            left join
        company.employee projectm
            on p.ManagerProjectId = projectm.Id
            left join
        company.pay_method pm
            on p.PayMethodId = pm.Id
            left join
        company.country cy
            on p.CountryId = cy.Id
            left join
        company.city ci
            on p.CityId = ci.Id
            left join
        company.areas_conduct ac
            on p.AreaId = ac.Id
            left join
        company.indoor_outdoor id
            on p.IndoorOutdoorId = id.Id
            left join
        company.project gp
            on p.GeneralProjectId = gp.Id
            where ${query} ${sphera}
            group by p.Id 
            order by p.Id desc
        ` 
	};


	static get getAll() {
		return  `select 
        pt.Name as ProjectTaskName,
        sp.Name as StatusName,
        fp.Name as FormatProjectName,
        d.Name as DepartamentName,
        com.Denomination as ClientName,
        cus.Denomination as CustomerName,
        ts.Name as SaleName,
        tp.name as ProjectTypeName,
        sm.name as SaleManagerName,
        sm.surname as SaleManagerSurname,
        sm.Image as SaleManagerImage,
        dm.name as DigitalManagerName,
        projectm.name as ManagerProjectName,
        projectm.Image as ManagerProjectImage,
        projectm.surname as ManagerProjectSurname,
        wm.name as ScreenWriterName,
        pm.Name as PayMethodName,
        cy.name as CountryName,
        ci.name as Cityname,
        ac.name as AreaName,
        id.name as IndoorOutdoorName,
        gp.name as GeneralProjectName,
        man.Name as ClientMainManagerName,
        cusman.Name as CustomerMainManagerName,
        man.Surname as ClientMainManagerSurname,
        cusman.Surname as CustomerMainManagerSuranme,
        p.*
    from
        company.project p
            left join
        company.project_task pt
            on p.ProjectTaskId = pt.Id and p.ProjectTaskId is not null
            left join 
        company.cyclical_project c
            on p.CyclicityId = c.Id
            left join
        company.status_project sp
            on p.StatusId = sp.Id
            left join 
        company.format_project fp
            on p.FormatId = fp.Id
            left join 
        company.department d
            on p.DepartmentId = d.Id
            left join 
        company.company com
            on p.ClientId = com.Id and p.ClientId is not null
            left join 
        company.company cus
            on p.CustomerId = cus.Id and p.CustomerId is not null
            left join
        company.manager man
			on p.ClientMainManagerId = man.Id
            left join
		company.manager cusman
			on p.CustomerMainManagerId = cusman.Id
            left join
        company.type_sale ts
            on p.SaleTypeId = ts.Id
            left join
        company.type_project tp
            on p.ProjectTypeId = tp.Id
            left join
        company.employee sm
            on p.SaleManagerId = sm.Id
            left join
        company.employee dm
            on p.DigitalManagerId = dm.Id
            left join
        company.employee wm
            on p.ScreenWriterId = wm.Id
            left join
        company.employee projectm
            on p.ManagerProjectId = projectm.Id
            left join
        company.pay_method pm
            on p.PayMethodId = pm.Id
            left join
        company.country cy
            on p.CountryId = cy.Id
            left join
        company.city ci
            on p.CityId = ci.Id
            left join
        company.areas_conduct ac
            on p.AreaId = ac.Id
            left join
        company.indoor_outdoor id
            on p.IndoorOutdoorId = id.Id
            left join
        company.project gp
            on p.GeneralProjectId = gp.Id
            group by p.Id 
            order by p.Id desc
        ` 
	};


    static get getOneWithout() {
		return  `SELECT * FROM company.project  where Id = ?` 
    };

	static get getOne() {
		return  `select 
        pt.Name as ProjectTaskName,
        sp.Name as StatusName,
        fp.Name as FormatProjectName,
        d.Name as ClientDepartamentName,
        man.Name as ClientMainManagerName,
        fil.Name as ClientFilialName,
        com.Denomination as ClientName,
        cus.Denomination as CustomerName,
        cusd.Name as CustomerDepartmentName,
        cusfil.Name as CustomerFilialName,
        cusman.Name as CustomerMainManager,
        ts.Name as SaleName,
        tp.Name as ProjectTypeName,
        sm.name as SaleManagerName,
        sm.Image as SaleManagerImage,
        sm.surname as SaleManagerSurname,
        dm.name as DigitalManagerName,
        wm.Name as ScreenWriterName,
        projectm.name as ManagerProjectName,
        projectm.Image as ManagerProjectImage,
        projectm.surname as ManagerProjectSurname,
        pm.Name as PayMethodName,
        cy.name as CountryName,
        ci.name as Cityname,
        ac.name as AreaName,
        id.name as IndoorOutdoorName,
        gp.name as GeneralProjectName,
        pdep.name as ProjectDepartmentName,
        man.Surname as ClientMainManagerSurname,
        cusman.Surname as CustomerMainManagerSuranme,
        p.*
    from
        company.project p
            left join
        company.project_task pt
            on p.ProjectTaskId = pt.Id and p.ProjectTaskId is not null
            left join 
        company.cyclical_project c
            on p.CyclicityId = c.Id
            left join
        company.status_project sp
            on p.StatusId = sp.Id
            left join 
        company.format_project fp
            on p.FormatId = fp.Id
            left join 
        company.department d
            on p.ClientDepartmentId = d.Id
            left join 
        company.company com
            on p.ClientId = com.Id and p.ClientId is not null
            left join 
        company.company cus
            on p.CustomerId = cus.Id and p.CustomerId is not null
            left join
		company.department cusd
            on p.CustomerDepartmentId = cusd.Id
            left join 
        company.type_sale ts
            on p.SaleTypeId = ts.Id
            left join
        company.type_project tp
            on p.ProjectTypeId = tp.Id
            left join
        company.employee sm
            on p.SaleManagerId = sm.Id
            left join
        company.employee dm
            on p.DigitalManagerId = dm.Id
            left join
        company.employee wm
            on p.ScreenWriterId = wm.Id
            left join
        company.employee projectm
            on p.ManagerProjectId = projectm.Id
            left join
        company.pay_method pm
            on p.PayMethodId = pm.Id
            left join
        company.country cy
            on p.CountryId = cy.Id
            left join
        company.city ci
            on p.CityId = ci.Id
            left join
        company.areas_conduct ac
            on p.AreaId = ac.Id
            left join
        company.indoor_outdoor id
            on p.IndoorOutdoorId = id.Id
            left join
        company.project gp
            on p.GeneralProjectId = gp.Id  
            left join 
		company.manager man
			on p.ClientMainManagerId = man.Id
            left join
		company.manager cusman
			on p.CustomerMainManagerId = cusman.Id
            left join
		company.filial fil
			on p.ClientFilialId = fil.Id
		    left join
		company.filial cusfil
            on p.CustomerFilialId = cusfil.Id
            left join
        company.department pdep
            on p.DepartmentId = pdep.Id
        where p.Id = ?` 
    };

    static get getAllByCompanyId() {
		return  `select 
        pt.Name as ProjectTaskName,
        sp.Name as StatusName,
        fp.Name as FormatProjectName,
        d.Name as DepartamentName,
        com.Denomination as ClientName,
        cus.Denomination as CustomerName,
        ts.Name as SaleName,
        tp.name as ProjectTypeName,
        sm.name as SaleManagerName,
        sm.Image as SaleManagerImage,
        sm.surname as SaleManagerSurname,
        dm.name as DigitalManagerName,
        projectm.name as ManagerProjectName,
        projectm.Image as ManagerProjectImage,
        projectm.surname as ManagerProjectSurname,
        wm.name as ScreenWriterName,
        pm.Name as PayMethodName,
        cy.name as CountryName,
        ci.name as Cityname,
        ac.name as AreaName,
        id.name as IndoorOutdoorName,
        gp.name as GeneralProjectName,
        man.Name as ClientMainManagerName,
        cusman.Name as CustomerMainManagerName,
        man.Surname as ClientMainManagerSurname,
        cusman.Surname as CustomerMainManagerSuranme,
        p.*
    from
        company.project p
            left join
        company.project_task pt
            on p.ProjectTaskId = pt.Id and p.ProjectTaskId is not null
            left join 
        company.cyclical_project c
            on p.CyclicityId = c.Id
            left join
        company.status_project sp
            on p.StatusId = sp.Id
            left join 
        company.format_project fp
            on p.FormatId = fp.Id
            left join 
        company.department d
            on p.DepartmentId = d.Id
            left join 
        company.company com
            on p.ClientId = com.Id and p.ClientId is not null
            left join 
		company.user usercom
			on com.UserId = usercom.Id
            left join
        company.company cus
            on p.CustomerId = cus.Id and p.CustomerId is not null
            left join
		company.user usercus
			on cus.UserId = usercom.Id
            left join
        company.manager man
			on p.ClientMainManagerId = man.Id
            left join
		company.manager cusman
			on p.CustomerMainManagerId = cusman.Id
            left join
        company.type_sale ts
            on p.SaleTypeId = ts.Id
            left join
        company.type_project tp
            on p.ProjectTypeId = tp.Id
            left join
        company.employee sm
            on p.SaleManagerId = sm.Id
            left join
        company.employee dm
            on p.DigitalManagerId = dm.Id
            left join
        company.employee wm
            on p.ScreenWriterId = wm.Id
            left join
        company.employee projectm
            on p.ManagerProjectId = projectm.Id
            left join
        company.pay_method pm
            on p.PayMethodId = pm.Id
            left join
        company.country cy
            on p.CountryId = cy.Id
            left join
        company.city ci
            on p.CityId = ci.Id
            left join
        company.areas_conduct ac
            on p.AreaId = ac.Id
            left join
        company.indoor_outdoor id
            on p.IndoorOutdoorId = id.Id
            left join
        company.project gp
            on p.GeneralProjectId = gp.Id  
        where com.Id  = ? or cus.Id = ?
            group by p.Id 
            order by p.Id desc
        ` 
	};
    
    static get maxId(){
        return `SELECT Max(Id) as MaxId FROM company.project`
    }

    static get updateProjectDate(){
        return `UPDATE project
        SET
        Projectdate = concat(COALESCE(Projectdate,''),',',date(?)),
        FollowUp = date(now())
        WHERE Id = ?`
    }

    static get updateProjectName(){
        return `UPDATE project
        SET Name = ?
        WHERE Id = ?`
    }

    static get deleteOne(){
		return `DELETE FROM project WHERE  Id = ?`
    }
    
    static get getProject(){
        return `SELECT * FROM company.project where GeneralProjectId = ?`
    }

    static get getProjectByCompanyId(){
        return `SELECT * FROM company.project where ClientId = ? or CustomerId = ?`
    }

    static get countProject(){
        return `select count(Id) as ProjectLengt FROM project WHERE  Id > 0`
    }

    static get countProjectByStatusId(){
        return ` select count(Id) as ProjectLengtByStatus FROM project WHERE  StatusId = ?`
    }

    static get getAllProjectName(){
        return `SELECT Name,Id FROM company.project`
    }

    static get getProjectComments(){
        return `SELECT pc.Name as Comment,date(pc.CreateTime) as CommentCreateTime,e.Name as EmployeeName,e.Surname as EmployeeSurname,e.Image as EmployeeImage FROM company.project_coment pc
        inner join employee e
            on pc.EmployeeId = e.Id
            where pc.ProjectId = ?`
    }
}

module.exports = { ProjectQueries };
