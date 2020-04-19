"use strict";

class PositionEmployeesQueries {
	static get signUp() {
		return `INSERT INTO position_employees (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE position_employees SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from position_employees where Id > 0`
	};

	static get getOne() {
		return `select * from position_employees where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM position_employees WHERE  Id = ?`
	}
}

module.exports = { PositionEmployeesQueries };
