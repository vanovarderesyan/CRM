"use strict";

class ContactCompanyQueries {
	static get signUp() {
		return `INSERT INTO contact_user (\`Id\`, \`UserId\`,\`ContactTypeId\`,\`Text\`) VALUES (NULL, ?,?,?)`;
	};

	// static get update() {
	// 	return `UPDATE contact_company SET \`Name\` = ? WHERE \`Id\` = ?`;
	// };

	// static get getAll() {
	// 	return `select * from contact_company where Id > 0`
	// };

	// static get getOne() {
	// 	return `select * from contact_company where \`Id\` =  ?`
	// };

	// static get deleteOne(){
	// 	return `DELETE FROM country WHERE  Id = ?`
	// }
}

module.exports = { ContactCompanyQueries };
