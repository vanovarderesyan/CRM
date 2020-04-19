"use strict";

class SubcontractorQueries {
	static get signUp() {
		return `INSERT INTO subcontractor (\`Id\`, \`Name\`, \`Surname\`, \`LastName\`, \`UserId\`)  VALUES (NULL,?,?,?,?)`;
	};

	static get update() {
		return `update company.subcontractor,company.user as user
		inner join company.subcontractor as com
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
		return `select s.*,us.Comments,us.Contracts,us.SphereActivityId,sa.Name as SphereActivityName  from subcontractor s 
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
		return `select s.*,us.Comments,us.Contracts,us.SphereActivityId,sa.Name as SphereActivityName  from subcontractor s 
		inner join 
	user us 
		on s.UserId = us.Id
		inner join
	sphere_activity sa
		on us.SphereActivityId = sa.Id
		where s.Id  = ?`
	};

	static get getContact(){
		return `select ce.Text as ContactValue,tc.Name as ContactType from company.subcontractor e
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
		FROM subcontractor m
		INNER JOIN user u ON m.UserId = u.Id
		WHERE m.Id = ?`
	}

	static get updateSubcontractorContracts(){
        return `UPDATE company.subcontractor,company.user as user
		inner join company.subcontractor as com
		on com.UserId = user.Id
		SET
			user.Contracts = concat(COALESCE(user.Contracts,''),',',?)
		WHERE com.Id = ?`
	}
	
	static getAllBySearch(query) {
		return `select com.*,s.Name as SphereActivityName,s.Id as SphereActivityId from company.subcontractor com 
		left join
		company.user user
			on com.UserId = user.Id
			left join
		company.sphere_activity s
			on user.SphereActivityId = s.Id
			 where ${query}
			 order by com.Id desc`
	};

	static get getAllProjectBySubcontractorId(){
		return `
		select 
        pt.Name as ProjectTaskName,
        sp.Name as StatusName,
        fp.Name as FormatProjectName,
        d.Name as DepartamentName,
        com.Denomination as ClientName,
        cus.Denomination as CustomerName,
        ts.Name as SaleName,
        tp.name as ProjectTypeName,
        sm.name as SaleManagerName,
        dm.name as DigitalManagerName,
        projectm.name as ManagerProjectName,
        wm.name as ScreenWriterName,
        pm.Name as PayMethodName,
        cy.name as CountryName,
        ci.name as Cityname,
        ac.name as AreaName,
        id.name as IndoorOutdoorName,
        gp.name as GeneralProjectName,
        p.*
	from
		company.project_subcontractor ps
			inner join
		company.project p
			on p.Id = ps.ProjectId
            left join
        company.project_task pt
            on p.ProjectTaskId = pt.Id and p.ProjectTaskId is not null
            left join 
        company.cyclical_project c
            on p.CyclicityId = c.Id
            left join
        company.status_project sp
            on p.SaleTypeId = sp.Id
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
        company.type_sale ts
            on p.SaleTypeId = ts.Id
            left join
        company.type_project tp
            on p.SaleTypeId = tp.Id
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
		where ps.SubcontractorId = ?
		group by p.Id
		order by p.Id desc`
	}
}

module.exports = { SubcontractorQueries };