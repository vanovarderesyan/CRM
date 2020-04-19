"use strict";

class ManagerQueries {
	static get signUp() {
		return `INSERT INTO manager (\`Id\`, \`Name\`, \`Surname\`, \`LastName\`, \`UserId\`)  VALUES (NULL,?,?,?,?)`;
	};

	// UPDATE company.company,company.user as user
	// 			inner join company.company as com
	// 			on com.UserId = user.Id
	// 			SET
	// 				com.CompanyTypeId = ?,
	// 				com.Denomination = ?,
	// 				com.Resident = ?,
	// 				com.Partner = ?,
	// 				com.DiscountSize = ?,
	// 				user.Comments = ?,
	// 				user.Contracts = ?,
	// 				user.SphereActivityId = ?
	// 			WHERE com.Id = ?

	static get update() {
		return `update company.manager,company.user as user
		inner join company.manager as com
		on com.UserId = user.Id
		SET
		com.Name = ?,
		com.Surname = ?,
		com.LastName = ?,
		user.Comments = ?,
		user.Contracts = ?,
		user.SphereActivityId = ?
		WHERE com.Id = ?`
	};

	static get getAll() {
		return `select s.*, concat(s.name,' ',s.Surname) as FulName ,us.Comments,us.Contracts,us.SphereActivityId,sa.Name as SphereActivityName  from manager s 
		inner join 
	user us 
		on s.UserId = us.Id
		inner join
	sphere_activity sa
		on us.SphereActivityId = sa.Id
		where s.Id > 0
		order by s.Id desc`
	};

	static get getOne() {
		return `select s.*,us.Comments,us.Contracts,us.SphereActivityId,sa.Name as SphereActivityName  from manager s 
		inner join 
	user us 
		on s.UserId = us.Id
		inner join
	sphere_activity sa
		on us.SphereActivityId = sa.Id
		where s.Id  = ?`
	};

	static get getContact(){
		return `select ce.Text as ContactValue,tc.Name as ContactType from company.manager e
		left join
	company.contact_user ce
		on e.UserId = ce.UserId
        left join
	company.type_contact tc
		on ce.ContactTypeId = tc.Id
        where e.Id = ?`
	}


	static get deleteOne(){
		return `DELETE m, u
		FROM manager m
		INNER JOIN user u ON m.UserId = u.Id
		WHERE m.Id = ?`
	}

	static get deleteCompanyManager(){
		return `DELETE m, u,cm
		FROM manager m
		INNER JOIN user u ON m.UserId = u.Id
		inner join company_manager cm on cm.ManagerId = m.Id
		WHERE cm.CompanyId = ?`
	}

	static get updateManagerContracts(){
        return `UPDATE company.manager,company.user as user
		inner join company.manager as com
		on com.UserId = user.Id
		SET
			user.Contracts = concat(COALESCE(user.Contracts,''),',',?)
		WHERE com.Id = ?`
	}
	
	static getAllBySearch(query) {
		return `select com.*,s.Name as SphereActivityName,s.Id as SphereActivityId from company.manager com 
		left join
		company.user user
			on com.UserId = user.Id
			left join
		company.sphere_activity s
			on user.SphereActivityId = s.Id
			 where ${query}
			 order by com.Id desc`
	};

	static get getAllProjectByManagerId(){
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
		company.project_manager_company ps
			inner join
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
		where ps.ManagerId = ? or p.ClientMainManagerId = ? or p.CustomerMainManagerId = ?
		group by p.Id		
		order by p.Id desc`
	}
}

module.exports = { ManagerQueries };