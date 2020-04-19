"use strict";

class CompanyManagerQueries {
	static get signUp() {
		return `INSERT INTO company_manager (\`Id\`, \`CompanyId\`, \`ManagerId\`)  VALUES (NULL,?,?)`;
	};

	static get getAll() {
		return `select * from company_manager where Id > 0`
	};

	static get getOne() {
		return `select * from company_manager where \`Id\` =  ?`
	};

	static get getManagerByCompanyId(){
		return `SELECT f.Name,concat(f.Name,' ',f.Surname) as FulName,f.Id
		FROM 
		company.company_manager com 
			left join
		company.company_department cd
			on cd.CompanyId = ?
            left join
		company.department_manager dm
			on dm.DepartmentId = cd.DepartmentId
			left join
		company.company_filial cf
			on cf.CompanyId = ?
            left join
		company.filial_department fd
			on fd.FilialId = cf.FilialId
            left join
		company.department_manager dpM
			on dpM.DepartmentId = fd.DepartmentId
            left join
		company.filial_manager fm
			on fm.FilialId = cf.FilialId
			left join
		company.manager f
			on com.ManagerId = f.Id or f.Id = fm.ManagerId or f.Id = dm.ManagerId or f.Id = dpM.ManagerId
		where com.CompanyId = ?
        group by f.Id`
	}

	static get deleteOne(){
		return `DELETE FROM employee WHERE  Id = ?`
	}
}

module.exports = { CompanyManagerQueries };