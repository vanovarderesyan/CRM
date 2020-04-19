const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const secret = "levon";

class AuthenticationService {
	hash(any) {
		return crypto.createHash('sha256').update(any).digest('hex');
	};

	jwtVerify(token) {
		return new Promise((resolve, reject) => {
			jwt.verify(token, secret, (error, decoded) => {
				if (error) {
					reject(error);
				} else {
					resolve(decoded);
				}
			})
		})
	};

	jwtSign(tokenObject) {
		// TODO Change milliseconds
		return jwt.sign(tokenObject, secret, {expiresIn: 2000000});
	};
}

module.exports = new AuthenticationService();