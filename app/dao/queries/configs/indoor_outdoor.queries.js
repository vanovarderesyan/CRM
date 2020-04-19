"use strict";

class IndoorOutdoorQueries {
	static get signUp() {
		return `INSERT INTO indoor_outdoor (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE indoor_outdoor SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from indoor_outdoor where Id > 0`
	};

	static get getOne() {
		return `select * from indoor_outdoor where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM indoor_outdoor WHERE  Id = ?`
	}
}

module.exports = { IndoorOutdoorQueries };
