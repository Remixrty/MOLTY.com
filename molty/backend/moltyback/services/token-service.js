const jwt = require('jsonwebtoken')
const { token } = require('morgan')
const Token = require('../models/Token')

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: '59m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, { expiresIn: '30d' })
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccess(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)

            return userData
        }
        catch (e) {
            return null
        }
    }

    validateRefresh(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN)

            return userData
        }
        catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await Token.create({ user: userId, refreshToken })
        return token
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.deleteOne({ refreshToken })
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({ refreshToken })
        return tokenData
    }


}

module.exports = new TokenService()