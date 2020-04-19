const Joi = require("joi");

class EmployeeInterface {

    static get signUp() {
        return Joi.object().keys({
            "Name": Joi.string().min(1).max(20).required().error(new Error('поле Имя субпорядчика обязательное для заполнения')),
            "Surname" : Joi.string().min(1).max(40).required().error(new Error('поле Фамилия субпорядчика обязательное для заполнения')),
            "PositionId": Joi.number().min(1).required().error(new Error('поле Должность субпорядчика обязательное для заполнения')),
            "Username" : Joi.string().min(1).max(40).required().error(new Error('поле Логин субпорядчика обязательное для заполнения')),
            "Password" : Joi.string().min(1).max(255).required().error(new Error('поле Пароль субпорядчика обязательное для заполнения')),
            "Contact" : Joi.array().min(1).items({
                "ContactTypeId": Joi.number().min(1).required(),
                "Text": Joi.string().required()
            }).max(5).required().error(new Error('поле Контактные данные субпорядчика обязательное для заполнения'))
        })
    };

    static get update() {
        return Joi.object().keys({
            "Id": Joi.number().min(0).required(),
            "Name": Joi.string().min(1).max(20).required().error(new Error('поле Имя субпорядчика обязательное для заполнения')),
            "Surname" : Joi.string().min(1).max(40).required().error(new Error('поле Фамилия субпорядчика обязательное для заполнения')),
            "PositionId": Joi.number().min(1).required().error(new Error('поле Должность субпорядчика обязательное для заполнения')),
            "Username" : Joi.string().min(1).max(40).required().error(new Error('поле Логин субпорядчика обязательное для заполнения')),
            "Password" : Joi.string().min(1).max(255).error(new Error('поле Пароль субпорядчика обязательное для заполнения'))
        })
    };

    static get signUpContact(){
        return Joi.object().keys({
            "ContactTypeId": Joi.number().min(0).required(),
            "Text": Joi.string().required()
        })
    }

}

module.exports = EmployeeInterface;