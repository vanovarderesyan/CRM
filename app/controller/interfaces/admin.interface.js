const Joi = require("joi");

class AdminInterface {
    static get login() {
        return  Joi.object().keys({
            "Username" : Joi.string().min(1).max(40).required().error(new Error('поле E-mail обязательное для заполнения')),
            "Password" : Joi.string().min(1).max(255).required().error(new Error('поле Пароль обязательное для заполнения'))
        })
    };

    static get TokenCheckSchema() {
        return Joi.object().keys({
            "token": Joi.string().required()
        })
    };

    static get TokenRefreshSchema() {
        return Joi.object().keys({
            "token": Joi.string().required(),
            "refreshToken": Joi.string().required()
        })
    };
}

module.exports = AdminInterface;