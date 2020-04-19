'use strict'

class SphereActivitySwagger {

    static get signUp() {
        return `/**
        * @swagger
        * /admin/sphereActivity:
        *   post:
        *     tags:
        *      - config => sphere_activity
        *     description: SignUp sphereActivity
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Name
        *         description: sphereActivity Name
        *         in:  body
        *         required: true
        *         type: string
        *         example : {Name: name}
        *     responses:
        *       200:
        *         description : result => Id = result.InsertId   *        
        *         example : 
        *           message : int
        */`
    };

    static get getAll() {
        return `/**
        * @swagger
        * /admin/sphereActivity:
        *   get:
        *     tags:
        *      - config => sphere_activity
        *     description: get all sphereActivity
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
        *         description : all sphereActivity in db       
        *         example : 
        *           message : array
        */`
    };

    static get update() {
        return `/**
        * @swagger
        * /admin/sphereActivity:
        *   put:
        *     tags:
        *      - config => sphere_activity
        *     description: update sphereActivity
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: body
        *         description: update sphereActivity Name
        *         in:  body
        *         required: true
        *         type: object
        *         example : 
        *           Name : string
        *           Id : number
        *     responses:
        *       200:   
        *         description : all sphereActivitys in db          
        *         example : 
        *           message : string
        */`
    };

    static get getOne() {
        return `/**
        * @swagger
        * /admin/sphereActivity/:Id:
        *   get:
        *     tags:
        *      - config => sphere_activity
        *     description: get all sphereActivity
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in sphereActivity
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all sphereActivity in db       
        *         example : 
        *           message : array
        */`
    };

    static get deleteOne() {
        return `/**
        * @swagger
        * /admin/sphereActivity/:Id:
        *   delete:
        *     tags:
        *      - config => sphere_activity
        *     description: delete sphereActivity
        *     produces:
        *       - application/json
        *     parameters:
        *       - name: token
        *         description: Token for auth
        *         in:  headers
        *         required: true
        *         type: string
        *       - name: Id
        *         description: Id in sphereActivity
        *         in:  path
        *         required: true
        *         type: int
        *     responses:
        *       200:
        *         description : all sphereActivity in db       
        *         example : 
        *           message : array
        */`
    };

}

module.exports = SphereActivitySwagger;