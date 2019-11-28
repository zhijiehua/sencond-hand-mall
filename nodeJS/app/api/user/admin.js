const Router = require('koa-router')
const {Resolve} = require('../../lib/helper');
const res = new Resolve();
const {
  RegisterValidator,
  AdminLoginValidator
} = require('../validators/user/admin')
// const {LoginManager} = require('../../service/login');
const router = new Router({
  prefix: '/user/admin'
})

router.post('/auth',  async (ctx) => {
  console.log('/////////////////// ctx //////////////////////')
  console.log(ctx)
  const v = await new AdminLoginValidator().validate(ctx);
  console.log('/////////////////// v //////////////////////')
  console.log(v)
  console.log(v.get('body.email'))
  console.log(v.get('body.password'))
  // let token = await LoginManager.adminLogin(v.get('body.email'), v.get('body.password'));
  ctx.response.status = 200;
  ctx.body = res.json('444')
})

module.exports = router
