const Router = require('koa-router')
const {Resolve} = require('../../lib/helper');
const res = new Resolve();
const {
  RegisterValidator,
  AdminLoginValidator
} = require('../validators/user/admin')

const router = new Router({
  prefix: '/user/admin'
})

router.post('/auth',  async (ctx) => {
  ctx.response.status = 200;
  ctx.body = res.json('444')
})

module.exports = router
