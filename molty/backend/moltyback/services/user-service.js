const Users = require('../models/Users')
const uuid = require('uuid')
const MailService = require('./mail-service')
const TokenService = require('./token-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/dto')
const { refresh } = require('../controllers/user-controller')
const ApiError = require('../exeptions/api-error')


class UserService {

    async registration(email, username) {

        const cand = await Users.findOne({ username })
        const candidate = await Users.findOne({ email })
        console.log(cand, candidate)
        if (cand && candidate && cand.email == candidate.email && cand.username == candidate.username) {
            if (cand.isActivated === true) {
                console.log('hello')
                const userDto = new UserDto(cand)
                const tokens = tokenService.generateToken({ ...userDto })
                await tokenService.saveToken(userDto.id, tokens.refreshToken)
                return {
                    ...tokens,
                    user: userDto
                }
            }
            else {
                throw ApiError.BadRequest('Пользователь не подтвердил почту.')
            }
        }
        if (cand && candidate && (cand.email != candidate.email || cand.username != candidate.username)) {
            throw ApiError.CheckData('Имя пользователя или email не совпадают с действительными.')
        }
        if (candidate) {
            throw ApiError.BadRequest('Пользователь с таким email уже существует.')
        }
        if (cand) {
            throw ApiError.BadRequest('Пользователь с таким username уже существует.')
        }
        const activationLink = uuid.v4()
        const user = await Users.create({ email, username, activationLink })
        const userDto = new UserDto(user)
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${username}/${activationLink}`, { ...userDto })

        const tokens = tokenService.generateToken({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await Users.findOne({ activationLink })
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации!')
        }
        user.isActivated = true
        await user.save()

    }


    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefresh(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await Users.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }

    }

    async const(back, bio, header, links, email, username) {
        const user = await Users.findOne({ username })
        if (!user) {
            throw ApiError.UnauthorizedError()
        }
        const json = JSON.stringify({back, bio, header, links})
        console.log(json);
        console.log(JSON.parse(json));
        if (user && json){
            user.json = json
            return user.save()
        }
        
    }

    async getConst(username) {
        const user = await Users.findOne({ username })
        if (!user) {
            throw ApiError.UnauthorizedError()
        }
    }
}

module.exports = new UserService()
