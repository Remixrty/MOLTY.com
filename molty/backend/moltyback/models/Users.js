const {Schema, model} = require('mongoose')

const UserSchema = new Schema ({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    json: {type: String, default: ''},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
})

module.exports = model('User', UserSchema)