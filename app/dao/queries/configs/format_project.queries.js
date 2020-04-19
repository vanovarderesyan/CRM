"use strict";

class FormatProjectQueries {
	static get signUp() {
		return `INSERT INTO format_project (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE format_project SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `SELECT * from format_project where Id > 0`
	};

	static get getOne() {
		return `SELECT * from format_project where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM format_project WHERE  Id = ?`
	}
}

module.exports = { FormatProjectQueries };
