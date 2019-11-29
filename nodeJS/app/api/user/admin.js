const Router = require('koa-router')
const {Resolve} = require('../../lib/helper');
const res = new Resolve();
const {
  checkUserInfo
} = require('../validators/user/admin')

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
    ctx.response.status = 200;
  }
  ctx.body = res.json(msg)
})

module.exports = router
