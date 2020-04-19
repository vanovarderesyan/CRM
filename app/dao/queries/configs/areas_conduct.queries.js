"use strict";

class AreasConductQueries {
	static get signUp() {
		return `INSERT INTO areas_conduct (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE areas_conduct SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from areas_conduct where Id > 0`
	};

	static get getOne() {
		return `select * from areas_conduct where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM areas_conduct WHERE  Id = ?`
	}
}

module.exports = { AreasConductQueries };
