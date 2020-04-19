"use strict";

class ProjectSubcontractorQueries {
	static get signUp() {
		return `INSERT INTO project_subcontractor
		(Id,
		ProjectId,
		SubcontractorId)
		VALUES
		(null,
		?,
		?)`;
	};

	static signUpCondition(keys) {
		return `INSERT INTO project_subcontractor
		(Id,
		SubcontractorId,
		ProjectId)
		VALUES
		${keys}`;
	};

	// static get update() {
	// 	return `UPDATE manager SET \`Name\` = ? WHERE \`Id\` = ?`;
	// };

	// static get getAll() {
	// 	return `select * from manager where Id > 0`
	// };

	static get getOne() {
		return `select sub.* from company.project_subcontractor ps 
		inner join
		company.subcontractor sub
			on ps.SubcontractorId = sub.Id
		where ProjectId =  ?`
	};

	static get deleteProjectSubcontractor(){
		return `DELETE FROM project_subcontractor
		WHERE SubcontractorId = ? and ProjectId = ?`
	}

	static get deleteProjectSubcontractorALl(){
		return `DELETE FROM project_subcontractor
		WHERE ProjectId = ?`
	}
}

module.exports = { ProjectSubcontractorQueries };