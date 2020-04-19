"use strict";

class ProjectManagerCompanyQueries {
	static get signUp() {
		return `INSERT INTO  project_manager_company (\`Id\`, \`ProjectId\`, \`ManagerId\`, \`CompanyId\`,IsClient)  VALUES (NULL,?,?,?,?)`;
	};

	static signUpCondition(keys) {
		return `INSERT INTO  project_manager_company (\`Id\`, \`ManagerId\`, \`ProjectId\`, \`CompanyId\`,IsClient)  VALUES ${keys}`;
	};

	static get getAllByProjectAndCompanyId(){
		return `SELECT m.* FROM company.project_manager_company pmc
					inner join
				company.manager m
					on pmc.ManagerId = m.Id
				where pmc.ProjectId = ? and pmc.CompanyId = ? and pmc.IsClient = ?`
	}

	static get deleteProjectManagerCompany(){
		return `DELETE FROM project_manager_company
		WHERE CompanyId = ? and ManagerId = ? and ProjectId = ? and IsClient = ?`
	}

	static get deleteProjectManagerCompanyAll(){
		return `DELETE FROM project_manager_company
		WHERE ProjectId = ?`
	}
}

module.exports = { ProjectManagerCompanyQueries };