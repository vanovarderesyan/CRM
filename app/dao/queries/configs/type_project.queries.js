"use strict";

class TypeProjectQueries {
	static get signUp() {
		return `INSERT INTO type_project (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE type_project SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from type_project where Id > 0`
	};

	static get getOne() {
		return `select * from type_project where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM type_project WHERE  Id = ?`
	}
}

module.exports = { TypeProjectQueries };
