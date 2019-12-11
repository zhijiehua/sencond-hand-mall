import {post, get} from '@/api/axios'

/** 用户注册 */
export function createUser (param) {
  return post('user/admin/auth', param)
}
