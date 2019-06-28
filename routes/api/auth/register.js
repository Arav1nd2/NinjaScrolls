const express = require('express');
const router = express.Router();
const authDao = require('../../../dao/authDao');
const { response } = require('../../../engineering/gatekeeper');
const resource = require('../../../responses/response');

router.post('/register', async (request, res) => {
    const AuthDao = new authDao();
    await AuthDao.addAuth(request.body);
    let data = await AuthDao.register();
    let resp_obj;
    if(data.error) {
        resp_obj = resource['register_failure'];
        response(res, 400, resp_obj);
    } else {
        resp_obj = resource['register_success'];
        resp_obj.data = data;
        response(res, 201, resp_obj);
    }

})


module.exports = router;