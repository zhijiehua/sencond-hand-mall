const Router = require('koa-router')
const {Resolve} = require('../../lib/helper');
const res = new Resolve();
const router = new Router({
  prefix: '/address/getAddressMsg'
})

// 获取地址信息
router.post('/addressMsg', async (ctx) => {
    ctx.response.status = 200;
    ctx.body = res.success('注册成功');
})

module.exports = router
