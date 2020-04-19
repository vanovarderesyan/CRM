const Joi = require("joi");

class CompanyInterface {

    static get signUp() {
        return Joi.object().keys({
            "Contracts" : Joi.string().min(1).max(40).allow('').error(new Error('поле Контракты обязательное для заполнения')),
            "SphereActivityId": Joi.number().min(1).required().error(new Error('поле Сегмент обязательное для заполнения')),
            "Comments" : Joi.string().min(1).allow(null).error(new Error('поле Комментарии обязательное для заполнения')),
            "CompanyTypeId" : Joi.number().required().error(new Error('поле Тип компании обязательное для заполнения')),
            "Denomination" : Joi.string().required().error(new Error('поле Название компании обязательное для заполнения')),
            "DiscountSize" : Joi.number().allow(null).error(new Error('поле Размер скидки обязательное для заполнения')),
            "CountryId" :Joi.number().min(1).allow(null).error(new Error('поле Страна обязательное для заполнения')),
            "CityId" :Joi.number().min(1).allow(null).error(new Error('поле Город обязательное для заполнения')),
            "Partner" : Joi.number().min(0).max(1).required().error(new Error('поле Партнер обязательное для заполнения')),
            "Concurent" : Joi.number().min(0).max(1).allow(null).error(new Error('поле Конкурент обязательное для заполнения')),
            "Contact" : Joi.array().items({
                "ContactTypeId": Joi.number().min(1).required().error(new Error('поле Контракты обязательное для заполнения')),
                "Text": Joi.string().required().error(new Error('поле Значение обязательное для заполнения'))
            }).allow([]).error(new Error('поле Контакты обязательное для заполнения'))
        })
    };

    static get update() {
        return Joi.object().keys({
            "Id": Joi.number().min(0).required(),
            "Contracts" : Joi.string().min(1).max(40).allow('').error(new Error('поле Контракты обязательное для заполнения')),
            "SphereActivityId": Joi.number().min(1).required().error(new Error('поле Сегмент обязательное для заполнения')),
            "Comments" : Joi.string().allow(null).allow("").error(new Error('поле Комментарии обязательное для заполнения')),
            "CompanyTypeId" : Joi.number().min(1).required().error(new Error('поле Тип компании обязательное для заполнения')),
            "Denomination" : Joi.string().min(1).required().error(new Error('поле Название компании обязательное для заполнения')),
            "DiscountSize" : Joi.number().allow(null).error(new Error('поле Размер скидки обязательное для заполнения')),
            "Partner" : Joi.number().min(0).max(1).required().error(new Error('поле Партнер обязательное для заполнения')),
            "CountryId" :Joi.number().min(1).allow(null).error(new Error('поле Страна обязательное для заполнения')),
            "CityId" :Joi.number().min(1).allow(null).error(new Error('поле Город обязательное для заполнения')),
            "Concurent" : Joi.number().min(0).max(1).allow(null).error(new Error('поле Конкурент обязательное для заполнения'))
        })
    };

    static get signUpFilial() {
        return Joi.object().keys({
            "CompanyId": Joi.number().min(0).required(),
            "Name": Joi.string().min(1).required()
        })
    };

    static get signUpDepartment() {
        return Joi.object().keys({
            "CompanyId": Joi.number().min(0).required(),
            "Name": Joi.string().min(1).required()
        })
    };

    static get signUpManager() {
        return Joi.object().keys({
            "CompanyId": Joi.number().min(0).required(),
            "ManagerId": Joi.number().min(0).required()
        })
    };

    static get signUpDepartmentFilial() {
        return Joi.object().keys({
            "FilialId": Joi.number().min(0).required(),
            "Name": Joi.string().min(1).required()
        })
    };

    static get signUpDepartmentManager() {
        return Joi.object().keys({
            "DepartmentId": Joi.number().min(0).required(),
            "ManagerId": Joi.number().min(0).required()
        })
    };

    static get signUpFilialManager() {
        return Joi.object().keys({
            "FilialId": Joi.number().min(0).required(),
            "ManagerId": Joi.number().min(0).required()
        })
    };

    static get signUpContact(){
        return Joi.object().keys({
            "ContactTypeId": Joi.number().min(0).required(),
            "Text": Joi.string().required()
        })
    }

    static get searchCompany() {
        return Joi.object().keys({
            "Regexp": Joi.string().min(1).max(20).required(),
            "SphereActivityId": Joi.number().min(1)
        })
    };

    static get updateContracts() {
        return Joi.object().keys({
            "CompanyId": Joi.number().min(0).required(),
            "Contracts" : Joi.string().min(1).max(40).required()
        })
    };


    static get filtrCompany() {
        return Joi.object().keys({
            "Name": Joi.string(),
            "SphereActivityId": Joi.array().items(Joi.number()).allow([])
        })
    };
}

module.exports = CompanyInterface;