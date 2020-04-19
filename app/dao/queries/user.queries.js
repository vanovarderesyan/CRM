"use strict";

class UserQueries {
	static get signUp() {
		return `INSERT INTO user (\`Id\`, \`Contracts\`, \`Comments\`, \`SphereActivityId\`)  VALUES (NULL,?,?,?)`;
	};

	static get update() {
		return `UPDATE user SET \`Comments\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from user where Id > 0`
	};

	static get getOne() {
		return `select * from user where \`Id\` =  ?`
	};
}

module.exports = { UserQueries };