"use strict";

class ContactEmployeeQueries {
	static get signUp() {
		return `INSERT INTO contact_employee (\`Id\`, \`EmployeeId\`,\`ContactTypeId\`,\`Text\`) VALUES (NULL, ?,?,?)`;
	};

	// static get update() {
	// 	return `UPDATE contact_employee SET \`Name\` = ? WHERE \`Id\` = ?`;
	// };

	// static get getAll() {
	// 	return `select * from contact_employee where Id > 0`
	// };

	// static get getOne() {
	// 	return `select * from contact_employee where \`Id\` =  ?`
	// };

	// static get deleteOne(){
	// 	return `DELETE FROM country WHERE  Id = ?`
	// }
}

module.exports = { ContactEmployeeQueries };
