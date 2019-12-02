const Router = require('koa-router')
const {Resolve} = require('../../lib/helper');
const res = new Resolve();
const {
  checkUserInfo
} = require('../validators/user/admin')
const {Admin} = require('../../models/user/admin')

const router = new Router({
  prefix: '/user/admin'
})

router.post('/auth',  async (ctx) => {
  const v = new checkUserInfo()
  let msg = '数据合法'
  if (v.aa(ctx.request.body).length !== 0) {
    ctx.response.status = 500;
    msg = v.aa(ctx.request.body)
  } else {
    const admin = new Admin()
    admin.id = 0
    admin.user_id = '000000'
    admin.user_name = ctx.request.body.userName
    admin.name = ctx.request.body.name
    admin.email = ctx.request.body.email
    admin.phone_number = ctx.request.body.phoneNumber
    console.log(admin.phone_number)
    admin.pass_word = ctx.request.body.passWord
    console.log(admin.pass_word)
    admin.created_time = '2019-12-02'
    admin.save()
    ctx.response.status = 200;
  }
  ctx.body = res.json(msg)
})

module.exports = router
