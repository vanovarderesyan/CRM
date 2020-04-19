"use strict";

class PayMethodQueries {
	static get signUp() {
		return `INSERT INTO pay_method (Id, Name) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE pay_method set \`Name\` = ? WHERE \`Id\` = ?`
	};

	static get getAll() {
		return `select * from pay_method where Id > 0`
	};

	static get getOne() {
		return `select * from pay_method where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM pay_method WHERE  Id = ?`
	}
}

module.exports = { PayMethodQueries };