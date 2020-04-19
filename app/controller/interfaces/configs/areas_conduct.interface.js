const Joi = require("joi");

class AreasConductInterface {

    static get signUp() {
        return Joi.object().keys({
            "Name": Joi.string().required()
        })
    };

    static get update() {
        return Joi.object().keys({
            "Id": Joi.number().min(0).required(),
            "Name": Joi.string().required()
        })
    };

}

module.exports = AreasConductInterface;