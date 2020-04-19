const {AdminQueries : query} = require('./queries/admin.queries');
const connectionPool = require('./connection.pool').getPool();

class AdminDao {
	getAdmin(refreshToken){
		return new Promise((resolve, reject) => {
			connectionPool.query(query.getAdmin, [refreshToken], (err, data) => {
				console.log(data)
				if(err){
					reject(err);
				}
				if(data && data.length == 0){
					return reject(404)
				}
				resolve(data);
			})
		});
	};

	getLoggedAdmin(userName, password) {
		return new Promise((resolve, reject) => {
			console.log(query.getLoggedAdmin)
			connectionPool.query(query.getLoggedAdmin, [userName, password], (err, data) => {
				if (err) {
					return reject(err);
				}
				if (data.length == 0) {
					return reject()
				}
				resolve(data[0])
			});
		})
	};
}

module.exports.adminDao = new AdminDao();