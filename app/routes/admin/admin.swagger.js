'use strict'

class AdminSwagger {
    static get login() {
        return `/**
        * @swagger
        * /admin/login:
        *   post:
        *     tags:
        *      - Admin
        *     description: Login to the application
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: Username
        *         description: Username to use for login.
        *         in: formData
        *         required: true
        *         type: string
        *       - name: Password
        *         description: User's password.
        *         in: formData
        *         required: true
        *         type: string
        *     responses:
        *       200:
        *         description: users
        *         example : 
        *           token: string
        *           refreshToken : string 
        */`
    };

    static get checkToken() {
        return `/**
        * @swagger
        * /admin/check/token:
        *   get:
        *     tags:
        *      - Admin
        *     description: Returns all users
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *     responses:
        *       200:
        *         description : check_token serspons
        */`
    };

    static get refreshToken() {
        return `/**
        * @swagger
        * /admin/refresh/token:
        *   get:
        *     tags:
        *      - Admin
        *     description: Returns all users
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: refreshToken
        *         description: refreshToken for get new token
        *         in:  headers
        *         required: true
        *         type: string
        *     responses:
        *       200:
        *         description : check_token serspons
        */`
    };
}

module.exports = AdminSwagger;