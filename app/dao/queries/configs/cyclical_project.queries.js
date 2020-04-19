"use strict";

class CyclicalProjectQueries {
	static get signUp() {
		return `INSERT INTO cyclical_project (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE cyclical_project SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from cyclical_project where Id > 0`
	};

	static get getOne() {
		return `select * from cyclical_project where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM cyclical_project WHERE  Id = ?`
	}
}

module.exports = { CyclicalProjectQueries };
