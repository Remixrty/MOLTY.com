const userService = require('../services/user-service')
const { validationResult } = require('express-validator')
const ApiError = require('../exeptions/api-error')

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                // console.log(errors)
                next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const { email, username } = req.body
            const userData = await userService.registration(email, username)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }
    async saveConst(req, res, next) {
        try {
            // console.log(req);
            const { back, bio, header, links, email, username } = req.body
            const response = await userService.const(back, bio, header, links, email, username);
            // console.log(response);
            return res.json(response)
        }
        catch (e) {
            next(e)
        }
    }
    async getConst(req, res, next) {
        try {

        }
        catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        }
        catch (e) {
            next(e)
        }
    }
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            console.log(activationLink)
            const username = req.params.username
            return res.redirect(process.env.CLIENT_URL + '/' + username)
        }
        catch (e) {
            next(e)
        }
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(email, username)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }
    async users(req, res, next) {
        try {
            res.json(['123', '321'])
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()