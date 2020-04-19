"use strict";

class SphereActivityQueries {
	static get signUp() {
		return `INSERT INTO sphere_activity (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE sphere_activity SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from sphere_activity where Id > 0`
	};

	static get getOne() {
		return `select * from sphere_activity where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM sphere_activity WHERE  Id = ?`
	}
	
}

module.exports = { SphereActivityQueries };
