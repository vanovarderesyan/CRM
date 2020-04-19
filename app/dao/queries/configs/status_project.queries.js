"use strict";

class StatusQueries {
	static get signUp() {
		return `INSERT INTO status_project (Id, Name) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE status_project set \`Name\` = ? WHERE \`Id\` = ?`
	};

	static get getAll() {
		return `select * from status_project where Id > 0`
	};

	static get getOne() {
		return `select * from status_project where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM company.status_project WHERE  Id = ?`
	}
}

module.exports = { StatusQueries };
