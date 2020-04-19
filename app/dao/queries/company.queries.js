"use strict";

class CompanyQueries {
	static get signUp() {
		return `INSERT INTO company (\`Id\`, \`UserId\`, \`CompanyTypeId\`, \`Denomination\`,\`Partner\`,\`DiscountSize\`,CountryId,CityId,Concurent)  VALUES (NULL,?,?,?,?,?,?,?,?)`;
	};

	static get update() {
		return `UPDATE company.company,company.user as user
				inner join company.company as com
				on com.UserId = user.Id
				SET
					com.CompanyTypeId = ?,
					com.Denomination = ?,
					com.Partner = ?,
					com.DiscountSize = ?,
					user.Comments = ?,
					user.Contracts = ?,
					user.SphereActivityId = ?,
					com.CountryId = ?,
					com.CityId = ?,
					com.Concurent = ?
				WHERE com.Id = ?`;
	};


	// "Contracts" : Joi.string().min(1).max(40).required(),
	// "SphereActivityId": Joi.number().min(1).required(),
	// "Comments" : Joi.string().min(1).default('null'),
	static get getAll() {
		return `select com.*,s.Name as SphereActivityName from company.company com 
		left join
		company.user user
			on com.UserId = user.Id
			left join
		company.sphere_activity s
			on user.SphereActivityId = s.Id
			order by com.Id desc`
	};

	static get getAllBySphereActivityId() {
		return `select com.*,s.Name as SphereActivityName from company.company com 
		left join
		company.user user
			on com.UserId = user.Id
			left join
		company.sphere_activity s
			on user.SphereActivityId = s.Id
			 where com.Id > 0 and user.SphereActivityId = ?`
	};

	// static getAllBySearch(key) {
	// 	return `select com.*,s.Name as SphereActivityName from company.company com 
	// 	left join
	// 	company.user user
	// 		on com.UserId = user.Id
	// 		left join
	// 	company.sphere_activity s
	// 		on user.SphereActivityId = s.Id
	// 		 where com.Id > 0 and user.SphereActivityId ${key} ? and com.Denomination REGEXP ?`
	// };

	static getAllBySearch(query) {
		return `select com.*,s.Name as SphereActivityName,s.Id as SphereActivityId from company.company com 
		left join
		company.user user
			on com.UserId = user.Id
			left join
		company.sphere_activity s
			on user.SphereActivityId = s.Id
			 where ${query}
			 order by com.Id desc`
	};
	//SELECT * FROM company.company WHERE `Denomination` REGEXP 'D'
	static get signUpContact(){
		return `INSERT INTO company.contact_user (Id,UserId, ContactTypeId, text) values (null,?,?)`
	}

	// static get getOne() {
	// 	return `select 
	// 	cf.FilialId as CompanyFilialId,
	// 	fl.Name as CompanyFilialName,
	// 	man.Id as CompanyManagerId,
	// 	man.name as CompanyManagerName,
	// 	man.Surname as CompanyManagerSurname,
	// 	man.lastname as CompanyManagerLastname,
	// 	man.UserId as CompanyManagerUserId,
	// 	cd.DepartmentId as CompanyDepartamentId,
	// 	dp.Name as CompanyDepartmentName,
	// 	com.Id as CompanyId,
	// 	com.*,
	// 	us.*,
	// 	tc.Name as CompanyType,
	// 	sa.Name as SphereActivity,
	// 	manDep.Id as DepartamentManagerId,
	// 	manDep.name as DepartamentManagerName,
	// 	manDep.Surname as DepartamentManagerSurname,
	// 	manDep.lastname as DepartamentManagerLastname,
	// 	manDep.UserId as DepartamentManagerUserId,
	// 	mf.Id as FilialManagerId,
	// 	mf.name as FilialManagerName,
	// 	mf.Surname as FilialManagerSurname,
	// 	mf.lastname as FilialManagerLastname,
	// 	mf.UserId as FilialManagerUserId,
	// 	df.Name as FililalDepartamentName,
	// 	df.Id as FililalDepartamentId
	// from
	// 	company.company com
	// 		left join
	// 	company.company_filial cf
	// 		on com.Id = cf.CompanyId
	// 		left join 
	// 	company.company_manager cm
	// 		on com.Id = cm.CompanyId
	// 		left join
	// 	company.company_department cd
	// 		on com.Id = cd.CompanyId
	// 		left join
	// 	company.user us
	// 		on com.UserId = us.Id
	// 		left join
	// 	company.sphere_activity sa
	// 		on us.SphereActivityId  = sa.Id
	// 		left join 
	// 	company.type_company tc
	// 		on com.CompanyTypeId = tc.Id
	// 		left join 
	// 	company.filial fl
	// 		on cf.FilialId  = fl.Id
	// 		left join
	// 	company.manager man
	// 		on cm.ManagerId  = man.Id
	// 		left join
	// 	company.department dp
	// 		on cd.DepartmentId  = dp.Id
	// 		left join
	// 	company.filial_manager fm
	// 		on cf.FilialId = fm.FilialId
	// 		left join
	// 	company.manager mf
	// 		on fm.ManagerId = mf.Id
	// 		left join
	// 	company.filial_department fd
	// 		on cf.FilialId = fd.FilialId
	// 		left join
	// 	company.department df
	// 		on fd.DepartmentId = df.Id
	// 		left join
	// 	company.department_manager dm
	// 		on fd.DepartmentId  = dm.DepartmentId
	// 		left join
	// 	company.manager manDep
	// 		on dm.ManagerId = manDep.Id
	// 		where com.Id = ?`
	// };

	static get getOne(){
		return `select 
		cf.FilialId as CompanyFilialId,
		fl.Name as CompanyFilialName,
		man.Id as CompanyManagerId,
		man.name as CompanyManagerName,
		man.Surname as CompanyManagerSurname,
		man.lastname as CompanyManagerLastname,
		man.UserId as CompanyManagerUserId,
		cd.DepartmentId as CompanyDepartamentId,
		dp.Name as CompanyDepartmentName,
		com.Id as CompanyId,
		com.*,
		us.*,
		tc.Name as CompanyType,
		sa.Name as SphereActivity
	from
		company.company com
			left join
		company.company_filial cf
			on com.Id = cf.CompanyId
			left join 
		company.company_manager cm
			on com.Id = cm.CompanyId
			left join
		company.company_department cd
			on com.Id = cd.CompanyId
			left join
		company.user us
			on com.UserId = us.Id
			left join
		company.sphere_activity sa
			on us.SphereActivityId  = sa.Id
			left join 
		company.type_company tc
			on com.CompanyTypeId = tc.Id
			left join 
		company.filial fl
			on cf.FilialId  = fl.Id
			left join
		company.manager man
			on cm.ManagerId  = man.Id
			left join
		company.department dp
			on cd.DepartmentId  = dp.Id
			where com.Id = ?`
	}
	static get getOneData(){
		return `
		select 
		tc.Name as CompanyType,
		sa.Name as SphereActivity,
		us.*,
		com.*
	from
		company.company com
			left join
		company.user us
			on com.UserId = us.Id
			left join
		company.sphere_activity sa
			on us.SphereActivityId  = sa.Id
			left join 
		company.type_company tc
			on com.CompanyTypeId = tc.Id
			where com.Id = ?`
	}

	static get getCompanyRefId(){
		return `select 
		cf.FilialId as CompanyFilialId,
		cm.ManagerId as CompanyManagerId,
		cd.DepartmentId as CompanyDepartamentId
	from
		company.company com
			left join
		company.company_filial cf
			on com.Id = cf.CompanyId
			left join 
		company.company_manager cm
			on com.Id = cm.CompanyId
			left join
		company.company_department cd
			on com.Id = cd.CompanyId
			where com.Id = ?`
	}

	static get getFilial(){
		return `SELECT * FROM company.filial where Id in `
	}


	static get getDepartment(){
		return `SELECT * FROM company.department where Id in `
	}


	static get getManager(){
		return `SELECT * FROM company.manager where Id in `
	}

	static get getFilialDepartment(){
		return `SELECT * FROM company.filial_department f left join
		company.department d
			on f.DepartmentId = d.Id  where f.FilialId in `
	}

	static get getDepartmentManager(){
		return `SELECT * FROM company.department_manager d left join company.manager  m on d.ManagerId = m.Id  where d.DepartmentId in `
	}

	static get getFilialManager(){
		return `SELECT * FROM company.filial_manager f left join
		company.manager d
			on f.ManagerId = d.Id  where f.FilialId in `
	}

	static get getContact(){
		return `select ce.Text as ContactValue,tc.Name as ContactType from company.company e
		inner join
	company.contact_user ce
		on e.UserId = ce.UserId
        inner join
	company.type_contact tc
		on ce.ContactTypeId = tc.Id
        where e.Id = ?`
	}

	static get deleteOne(){
		return `DELETE fd,cm,fm,fil,ce,ceu,cmd,cmdfil,c,dm,cman
		FROM company c
		left join company_filial cf on cf.CompanyId = c.Id
		left join filial_department fd on fd.FilialId = cf.FilialId
		left join department_manager cm on cm.DepartmentId = fd.DepartmentId
		left join manager m on m.Id = cm.ManagerId
		left JOIN user u ON m.UserId = u.Id 
        left join filial_manager fm on fm.FilialId = cf.FilialId
        left join manager mf on mf.Id = fm.ManagerId
		left JOIN user uf ON mf.UserId = uf.Id
		left join filial fil on fil.Id = cf.FilialId
        left join company_department cd on cd.CompanyId = c.Id
        left join department_manager dm on dm.DepartmentId = cd.DepartmentId
		left join manager md on md.Id = dm.ManagerId
		left JOIN user du ON md.UserId = du.Id
		left join department cmd on cmd.Id = cd.DepartmentId
		left join department cmdfil on cmdfil.Id = fd.DepartmentId
        left join company_manager cman on cman.CompanyId = c.Id
        left join manager cma on cma.Id = cman.ManagerId
		left JOIN user cu ON cma.UserId = cu.Id
		left join contact_user ce on c.UserId = ce.UserId
		left JOIN user ceu ON ce.UserId = ceu.Id
		WHERE c.Id = ?`
	}

	static get updateCompanyContracts(){
		return `
		UPDATE company.company,company.user as user
				inner join company.company as com
				on com.UserId = user.Id
				SET
					user.Contracts = concat(COALESCE(user.Contracts,''),',',?)
				WHERE com.Id = ?`
    }
}




module.exports = { CompanyQueries };