"use strict";
const { adminDao: dao } = require("../../dao/admin.dao");
const {EmployeeDao} = require('../../dao/employee.dao');
const authService = require("../../service/authentication.service");

class AdminController {
	login(req, res) {
		const username = req.body.Username;
		const password = authService.hash(req.body.Password.toString());
		if (!username.trim() && !password.trim()) {
			return res.status(400).send("Password and username are required");
		}
		dao.getLoggedAdmin(username, password).then((admin) => {
			console.log(admin,'pppppppppppppp')
			const tokenObject = { id: admin.id ,username:admin.username};

			const token = authService.jwtSign(tokenObject);
			const sendingData = {
				token,
				refreshToken: admin.refreshToken
			};
			return res.status(200).json(sendingData);

		}).catch((err) => {
			console.log(err,'---------------')
			EmployeeDao.getLoggedEmployee(username, password).then((employee) => {
				const tokenObject = { id: employee.id ,username:employee.username};
				console.log(tokenObject,'55555555555');
				console.log(employee)
				const token = authService.jwtSign(tokenObject);
				console.log(req.TokenId,'tokenId')
				const sendingData = {
					token,
					refreshToken: employee.refreshToken,
					Id : employee.id
				};
				return res.status(200).json(sendingData);
	
			}).catch((errEmployee) => {
				res.sendStatus(404);
			})
		})
	};

	checkTokenIsExpired(req, res) {
		const token = req.headers.token;
		authService.jwtVerify(token).then(() => {
			res.sendStatus(200);
		}).catch(error => {
			return res.status(401).json(error);
		})
	};

	checkToken(req, res, next) {
		const token = req.headers.token;
		authService.jwtVerify(token).then(decodedToken => {
			console.log(decodedToken,'decodedToken');
			if(decodedToken.username){
				if(decodedToken.username != "admin"){
					req.decodedUsername = decodedToken.username
				}
			}
			req.decodedToken = { id: decodedToken.id};
			next()
		}).catch(error => {
			console.log(error,'jsjkdddddddddddddddd')
			return res.status(401).json(error);
		})
	};

	getNewJwtToken(req, res) {
		const refreshToken = req.headers.refreshtoken;
		const token = req.headers.token;
		if (!token || !refreshToken) {
			return res.sendStatus(400);
		}
		authService.jwtVerify(token).then(() => {
			return res.status(200);
		}).catch((err) => {
			if (err.name === "TokenExpiredError") {
				dao.getAdmin(refreshToken).then((admin) => {
					const jwtToken = authService.jwtSign({ Id: admin.Id, Username: admin.Username });
					return res.status(200).json({ token: jwtToken, refreshToken })
				}).catch((err) => {
					return res.sendStatus(err);
				})
			} else {
				return res.status(500).send("jwt error")
			}
		});
	};
}

module.exports.AdminController = new AdminController();

