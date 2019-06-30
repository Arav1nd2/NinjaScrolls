const express = require('express');
const router = express.Router();
const authDao = require('../../../dao/authDao');
const resources = require('../../../responses/response')
const {response} = require('../../../engineering/gatekeeper');

router.post('/login', async (request, res) => {
    let AuthDao = new authDao();
    AuthDao.addAuth(request.body);
    let resp_obj = await AuthDao.login();
    let resp;
    console.log(resp_obj, "Hey");  
    // if(resp_obj.error) {
    //     resp = resources['login_failure'];
    //     gatekeeper(response, 400, resp);
    // }
    resp = resources['login_success'];
    resp.data = resp_obj;
    res.cookie('book-store', resp_obj.token);
    response(res, 200, resp);
    
})


module.exports = router;