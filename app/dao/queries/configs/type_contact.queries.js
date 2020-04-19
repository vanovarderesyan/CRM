"use strict";

class TypeContactQueries {
	static get signUp() {
		return `INSERT INTO type_contact (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE type_contact SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from type_contact where Id > 0`
	};

	static get getOne() {
		return `select * from type_contact where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM type_contact WHERE  Id = ?`
	}
}

module.exports = { TypeContactQueries };
