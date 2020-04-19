"use strict";

class EmployeeQueries {
	static get signUp() {
		return `INSERT INTO employee (\`Id\`, \`Name\`, \`Surname\`, \`PositionId\`, \`Username\`, \`Password\`,\`Parol\`, \`refreshToken\`)  VALUES (NULL,?,?,?,?,?,?,?)`;
	};

	static get update() {
		return `UPDATE company.employee
		SET
		Name = ?,
		Surname = ?,
		Username = ?,
		Password = ?,
		PositionId = ?,
		Parol = ?
		WHERE Id = ?;`;
	};

	static get updateWithoutPassword() {
		return `UPDATE company.employee
		SET
		Name = ?,
		Surname = ?,
		Username = ?,
		PositionId = ?
		WHERE Id = ?`;
	};

	static get getLoggedEmployee() {
		return `SELECT id, username, refreshToken from employee WHERE Username = ? and Password = ?`
	};

	static get getAll() {
		return `select e.Id,e.Name,Surname,concat(e.Name,' ',e.Surname) as FulName,Image,Username,PositionId,pe.Name as PositionName from company.employee e
		left join
	company.position_employees pe
		on e.PositionId = pe.Id
		order by e.Id desc`
	};

	static get getOne() {
		return `select e.Id,e.Name,Surname,Image,Username,PositionId,Parol,pe.Name as PositionName from company.employee e
		left join
	company.position_employees pe
		on e.PositionId = pe.Id
        where e.Id = ?`
	};

	static get getContact(){
		return `select ce.Text as ContactValue,tc.Name as ContactType from company.employee e
		left join
	company.contact_employee ce
		on e.Id = ce.EmployeeId
        left join
	company.type_contact tc
		on ce.ContactTypeId = tc.Id
        where e.Id =  ?`
	}

	static get updateEployeeImage(){
		return `UPDATE employee SET \`Image\` = ? WHERE \`Id\` = ?`
	}

	static get getEmployeeByPositionId(){
		return `SELECT e.Id,ep.name as positionName,e.name,Surname,concat(e.Name,' ',e.Surname) as FulName,Username,PositionId FROM company.employee e
		inner join
		company.position_employees ep
			on e.PositionId = ep.Id and ep.Id = ?
            group by e.Id`
	}

	static get deleteOne(){
		return `DELETE e FROM employee e inner join contact_employee ce 
			on  e.Id = ce.EmployeeId
			where e.Id = ?`
	}

	static get getAllProjectByEmployeeId(){
		return `select 
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
            left join
        company.project_employee as proje
            on proje.ProjectId = p.Id
		where proje.EmployeeId = ? or p.SaleManagerId = ? or  p.DigitalManagerId = ? or  p.ScreenWriterId = ? or p.ManagerProjectId = ?
		group by p.Id
		order by p.Id desc`
	}
}

module.exports = { EmployeeQueries };