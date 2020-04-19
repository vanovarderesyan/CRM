const Joi = require("joi");

class ManagerInterface {

    static get signUp() {
        return Joi.object().keys({
            "Name": Joi.string().min(1).max(20).required().error(new Error('поле Имя менеджера субпорядчика обязательное для заполнения')),
            "Surname" : Joi.string().min(1).max(40).required().error(new Error('поле Фамилия менеджера субпорядчика обязательное для заполнения')),
            "LastName" : Joi.string().min(1).max(40).required().error(new Error('поле LastName субпорядчика обязательное для заполнения')),
            "Contracts" : Joi.string().min(1).max(40).allow('').error(new Error('поле Контракты субпорядчика обязательное для заполнения')),
            "SphereActivityId": Joi.number().min(1).required().error(new Error('поле Сегмент субпорядчика обязательное для заполнения')),
            "Contact" : Joi.array().min(1).items({
                "ContactTypeId": Joi.number().min(1).required(),
                "Text": Joi.string().required()
            }).max(5).required().error(new Error('поле Контактные данные субпорядчика обязательное для заполнения')),
            "Comments" : Joi.string().min(1).default('null').error(new Error('поле Комментарии субпорядчика обязательное для заполнения'))
        })
    };

    static get signUpContact(){
        return Joi.object().keys({
            "ContactTypeId": Joi.number().min(0).required(),
            "Text": Joi.string().required()
        })
    }

    static get update() {
        return Joi.object().keys({
            "Id": Joi.number().min(0).required(),
            "Name": Joi.string().min(1).max(20).required().error(new Error('поле Имя менеджера субпорядчика обязательное для заполнения')),
            "Surname" : Joi.string().min(1).max(40).required().error(new Error('поле Фамилия менеджера субпорядчика обязательное для заполнения')),
            "LastName" : Joi.string().min(1).max(40).required().error(new Error('поле LastName субпорядчика обязательное для заполнения')),
            "Contracts" : Joi.string().min(1).max(40).required().allow("").error(new Error('поле Контракты субпорядчика обязательное для заполнения')),
            "SphereActivityId": Joi.number().min(1).required().error(new Error('поле Сегмент субпорядчика обязательное для заполнения')),
            "Comments" : Joi.string().allow("").error(new Error('поле Комментарии субпорядчика обязательное для заполнения'))
        })
    };

    static get updateContracts() {
        return Joi.object().keys({
            "ManagerId": Joi.number().min(0).required(),
            "Contracts" : Joi.string().min(1).max(40).required()
        })
    };

    static get filtrManager() {
        return Joi.object().keys({
            "Name": Joi.string(),
            "SphereActivityId": Joi.array().items(Joi.number()).allow([])
        })
    };
}

module.exports = ManagerInterface;