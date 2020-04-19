"use strict";

class FilialQueries {
	static get signUp() {
		return `INSERT INTO filial (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE filial SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from filial where Id > 0`
	};

	static get getOne() {
		return `select * from filial where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM filial WHERE  Id = ?`
	}
}

module.exports = { FilialQueries };
