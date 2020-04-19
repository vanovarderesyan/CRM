"use strict";

class ProjectTaskQueries {
	static get signUp() {
		return `INSERT INTO project_task (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE project_task SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from project_task where Id > 0`
	};

	static get getOne() {
		return `select * from project_task where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM project_task WHERE  Id = ?`
	}
}

module.exports = { ProjectTaskQueries };
