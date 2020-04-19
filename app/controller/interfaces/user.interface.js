const Joi = require("joi");

class UserInterface {

    static get signUp() {
        return Joi.object().keys({
            "Contracts" : Joi.string().min(1).max(40).required(),
            "SphereActivityId": Joi.number().min(1).required(),
            "Comments" : Joi.string().min(1).default('null')
        })
    };

    static get update() {
        return Joi.object().keys({
            "Id": Joi.number().min(0).required(),
            "Comments": Joi.string().min(1).max(20).required()
        })
    };

}

module.exports = UserInterface;