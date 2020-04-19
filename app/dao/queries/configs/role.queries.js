"use strict";

class RoleQueries {
	static get signUp() {
		return `INSERT INTO role (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE role SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from role where Id > 0`
	};

	static get getOne() {
		return `select * from role where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM role WHERE  Id = ?`
	}
}

module.exports = { RoleQueries };
