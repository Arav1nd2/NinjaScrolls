const Auth = require('../modals/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthDao {
    async addAuth(data) {
        this.username = data.username;
        this.passwordHash = bcrypt.hashSync(data.password, 12);
        this.name = data.name;
        this.email = data.email
    }

    async login() {
        let result;
        await Auth.findOne({
            username: this.username
        }).then(user => {
            user.error = false;
            return user;
        })
        .then(res => {
            result = res;
        }).catch(err => {
            console.log(err);
            result = {
                error: true
            }
        })
        result.passwordHash = null;
        if(!result.error)
            result['error'] = false
        let token = jwt.sign(result.id, process.env.PRIVATEKEY);
        console.log(token, "This is a token");
        let newResult = {...result._doc, token: token, passwordHash: null};
        return newResult;
    }

    async register() {
        let result;
        const newauth = new Auth({
            username: this.username,
            passwordHash: this.passwordHash,
            email: this.email,
            name: this.name
        });
        let existingUser = await Auth.findOne({
            username: this.username
        });
        if(existingUser) {
            return {
                error: true
            }
        }
        await newauth.save().then(res => {
            console.log('Registered user successfully!')
            result = res;
        })
        result.error = false;
        result.passwordHash = null;
        return result;
    }
}

module.exports = AuthDao;