"use strict";

class CompanyFilialeQueries {
	static get signUp() {
		return `INSERT INTO company_filial (\`Id\`, \`CompanyId\`, \`FilialId\`)  VALUES (NULL,?,?)`;
	};

	static get getAll() {
		return `select * from company_filial where Id > 0`
	};

	static get getOne() {
		return `select * from company_filial where \`Id\` =  ?`
	};

	static get getFilialByCompanyId(){
		return `SELECT f.*
		FROM 
		company.company_filial com 
			inner join
		company.filial f
			on com.FilialId = f.Id
		where com.CompanyId = ?`
	}
}

module.exports = { CompanyFilialeQueries };