import {post, get} from '@/api/axios'

/** 用户注册 */
export function createUser (param) {
  delete param.otherPassWord
  console.log(param)
  return post('user/admin/auth', param)
}
