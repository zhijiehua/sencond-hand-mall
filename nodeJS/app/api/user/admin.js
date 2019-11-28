const Router = require('koa-router')
const {Resolve} = require('../../lib/helper');
const res = new Resolve();


const router = new Router({
  prefix: '/user/admin'
})

router.get('/auth',  async (ctx) => {

  ctx.response.status = 200;
  ctx.body = res.json('5555')
})

module.exports = router
