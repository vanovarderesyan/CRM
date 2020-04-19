"use strict";

class AdminQueries {
	static get getLoggedAdmin() {
		return `SELECT id, username, refreshToken from admin WHERE Username = ? and Password = ?`
	};

	static get getAdmin() {
		return `SELECT Id, Username from admin WHERE refreshToken = ?`;
	};
}

module.exports = { AdminQueries };
