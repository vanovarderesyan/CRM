"use strict";

class ProjectEmployeeQueries {
	static get signUp() {
		return `INSERT INTO project_employee
		(Id,
		ProjectId,
		EmployeeId)
		VALUES
		(null,
		?,
		?)`;
	};

	static signUpByCondition(keys) {
		return `INSERT INTO project_employee
		(Id,
		EmployeeId,
		ProjectId)
		VALUES
		${keys}`;
	};


	static get deleteEmployee(){
		return `DELETE FROM project_employee
		WHERE EmployeeId = ? and ProjectId = ?`
	}

	static get deleteEmployeeAll(){
		return `DELETE FROM project_employee
		WHERE ProjectId = ?`
	}
	// static get update() {
	// 	return `UPDATE manager SET \`Name\` = ? WHERE \`Id\` = ?`;
	// };

	// static get getAll() {
	// 	return `select * from manager where Id > 0`
	// };

	static get getOne() {
		return `select sub.Image as EmployeeImage,sub.Name as EmployeeName,sub.Surname as EmployeeSurname,sub.Id as EmployeeId ,pe.Name as PositionName,pe.Id as PositionId from company.project_employee ps 
			inner join
		company.employee sub
            on ps.EmployeeId = sub.Id
            left join
		company.position_employees pe
			on sub.PositionId = pe.Id
		where ProjectId =  ?`
	};
}

module.exports = { ProjectEmployeeQueries };