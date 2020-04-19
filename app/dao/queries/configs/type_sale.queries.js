"use strict";

class TypeSaleQueries {
	static get signUp() {
		return `INSERT INTO type_sale (\`Id\`, \`Name\`) VALUES (NULL, ?)`;
	};

	static get update() {
		return `UPDATE type_sale SET \`Name\` = ? WHERE \`Id\` = ?`;
	};

	static get getAll() {
		return `select * from type_sale where Id > 0`
	};

	static get getOne() {
		return `select * from type_sale where \`Id\` =  ?`
	};

	static get deleteOne(){
		return `DELETE FROM type_sale WHERE  Id = ?`
	}
}

module.exports = {TypeSaleQueries};
