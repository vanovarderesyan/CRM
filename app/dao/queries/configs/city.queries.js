"use strict";

class CityQueries {
	static get signUp() {
		return `INSERT INTO city (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE city SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from city where Id > 0`
	};

	static get getOne() {
		return `select * from city where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM city WHERE  Id = ?`
	}
}

module.exports = { CityQueries };
