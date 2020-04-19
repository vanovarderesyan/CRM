"use strict";

class CountryQueries {
	static get signUp() {
		return `INSERT INTO country (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE country SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from country where Id > 0`
	};

	static get getOne() {
		return `select * from country where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM country WHERE  Id = ?`
	}
}

module.exports = { CountryQueries };
