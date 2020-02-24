
import Vue from 'vue'
import Cookie from 'js-cookie'
import CryptoJS from 'crypto-js'

/*
 * 加密型 长久存储Cookie值
 * @name: 名称
 * @content: 内容
 * @expires: 过期时间
 * @setCookie: 存值
 * @getCookie: 取值
 * @removeCookie: 删除
 */
export const setCookie = (name, content, expires = '') => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  // eslint-disable-next-line standard/object-curly-even-spacing
  Cookie.set(name, content, { expires: expires || new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)})
}
export const getCookie = name => {
  return Cookie.get(name)
}
export const delCookie = name => {
  Cookie.remove(name)
}

/**
 * 本地会话存储 sessionStorage
 * @name: 名称
 * @content: 内容
 * @setStorage: 存值
 * @getStorage: 取值
 * @removeStorage: 删除
 */
export const setStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  sessionStorage.setItem(name, content)
}
export const getStorage = name => {
  return sessionStorage.getItem(name)
}
export const delStorage = name => {
  sessionStorage.removeItem(name)
}

/*
* Date格式化
* (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 \
* (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
*/
// eslint-disable-next-line no-extend-native
Date.prototype.Format = function (fmt) {
  var dt = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds()
    // 'S+' : this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var o in dt) {
    if (new RegExp('(' + o + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? dt[o] : ('00' + dt[o]).substr(('' + dt[o]).length))
    }
  }
  return fmt
}

/**
* 获取加密字段
*/
export const getCryptoJS = (context, iv, key) => {
  var encrypted = ''
  if (typeof (context) === 'string') {
  } else if (typeof (context) === 'object') {
    context = JSON.stringify(context)
  }
  var srcs = CryptoJS.enc.Utf8.parse(context)
  encrypted = CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

/**
 * 验证手机号
 */
export const isPhone = phone => {
  return /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(phone)
}

/**
 * 验证邮箱地址
 */
export const isEmall = email => {
  return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email)
}

/**
 * 验证密码 密码采用数字、字母、特殊字符且长度为6-20位
 */
export const isPassword = (name, str, callback) => {
  // 必须包含至少一位数字和一位字母
  // var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)
  // 必须包含数字加字母 不能包含特殊符号等
  // var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
  var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/
  if (reg.test(str)) {
    callback()
    return true
  } else {
    callback(new Error('密码长度至少6位，最多16个字符，密码中必须包含大写,小写字母、数字!'))
    return false
  }
  // if(/^.*?[\d]+.*$/.test(str) && /^.*?[A-Za-z]/.test(str) && /^.*?[~/`!@#$%^&*()_+|{}?;:><\-\]\\[\/].*$/.test(str) && /^.{6,20}$/.test(str)) {
  //     return true;
  // }
  // return false;
}

/**
 * 验证图片类型 gif|jpg|jpeg|png|GIF|JPG|PNG
 */
export const isFile = fileId => {
  let str = document.getElementById(fileId).value
  if (str == '') {
    alert('请上传图片')
    return false
  } else {
    if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(str)) {
      alert('图片类型必须是.gif,jpeg,jpg,png中的一种')
      return false
    }
  }
}

/**
 * 验证身份证 15位或者是18位 最后一位可以是X
 */
export const isIdentity = str => {
  return /^(\d{14}|\d{17})(\d|[xX])$/.test(str)
}

/**
 * 验证ip地址
 */
export const isValidIP = ip => {
  var re = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return re.test(ip)
}
/**
 * 删除字符串两侧空白字符串
 */
export const delTrim = str => {
  return str.replace(/^\s+|\s+$/g, '')
}

/**
 * 发送验证码 倒计时
 * @that  {sendOut} 当前状态 是否允许被点击
 * @that  {countDown} 当前倒计时时间
 * @that  {timer} 循环时间
 * */
export const getCodeCountdown = (that, countDown = 60, timer = 1000) => {
  if (that.sendOut) return
  let getTimer = setInterval(() => {
    that.countDown--
    if (that.countDown == 0) {
      that.countDown = countDown
      that.sendOut = false
      window.clearInterval(getTimer)
      return false
    }
  }, timer)
  that.sendOut = true
}

/**
 * 路由权限表筛选
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
export const asyncRouterMap = (userRouter = [], allRouter = []) => {
  let realRoutes = []
  allRouter.forEach((v, i) => {
    userRouter.forEach((item, index) => {
      if (item.name === v.name) {
        if (item.children && item.children.length > 0) {
          if (item['icon']) {
            v.name['icon'] = item['icon']
          }
          v.children = asyncRouterMap(item.children, v.children)
        }
        realRoutes.push(v)
      }
    })
  })
  return realRoutes
}

export const getTreeTranslate = (arr, treeArr = []) => {
  arr.map((item, index) => {
    if (item.children && item.children.length > 0) {
      treeArr = item
      getTreeTranslate(item.children, treeArr)
    } else {
      if (item.type == '3') {
        arr.splice(index, 1)
      }
    }
  })
  return treeArr
}

/**
 * 角色树状图进行帅选，去除半选状态的父级ID
 */
export const getTreeParentId = (arr1, arr2) => {
  return arr1.concat(arr2).filter(function (v, i, arr) {
    return arr.indexOf(v) === arr.lastIndexOf(v)
  })
}

/**
 * 权限列表匹配
 */
export const getPowerMatch = (str) => {
  let type = false
  const permissionList = JSON.parse(getCookie('permission'))
  if (str) {
    for (let i in permissionList) {
      if (permissionList[i] == str) {
        type = true
        break
      }
    }
  }
  return type
}

/**
 * 删除重复数组
 */
export const delRepeatingArray = (data, type) => {
  // var arrays = Array.from(new Set(data));  // ES6写法 得到未重复数组
  var arrays = data
  for (var i = arrays.length - 1; i >= 0; i--) {
    var typeNode = arrays[i][type]
    for (var j = 0; j < i; j++) {
      if (typeNode == arrays[j][type]) {
        arrays.splice(i, 1)
        break
      }
    }
  }
  return arrays
}

/**
 * 页码数
 */
export const getPageList = (total, page = 10) => {
  let arry = []
  let numList = Math.ceil(total / page)
  if (numList > 1) {
    for (let i = 1; i <= +numList; i++) {
      arry.push(i * page)
    }
  } else {
    arry.push(numList * page)
  }
  return arry
}

export const downLoad = (data, name) => {
  let fileName = name
  let elink = document.createElement('a')
  // 设置下载文件名
  elink.setAttribute('download', fileName)
  elink.style.display = 'none'
  let blob = new Blob([data], {type: 'image/png'})
  elink.href = window.URL.createObjectURL(blob)
  document.body.appendChild(elink)
  elink.click()
}

// 文件下载
export const downloadFile = (url) => {
  try {
    var elemIF = document.createElement('iframe')
    elemIF.src = url
    elemIF.style.display = 'none'
    document.body.appendChild(elemIF)
  } catch (e) {

  }
}

// 关闭浏览器
export const closeWebPage = () => {
  if (navigator.userAgent.indexOf('MSIE') > 0) {
    if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
      window.opener = null; window.close()
    } else {
      window.open('', '_top'); window.top.close()
    }
  } else if (navigator.userAgent.indexOf('Firefox') > 0) {
    window.location.href = 'about:blank ' // 火狐默认状态非window.open的页面window.close是无效的
    // window.history.go(-2);
  } else {
    window.opener = null
    window.open('', '_self', '')
    window.close()
  }
}

/**
 * 将整数转换成 时:分:秒 的格式
 */
export const realFormatSecond = (second) => {
  var secondType = typeof second
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)

    var hours = Math.floor(second / 3600)
    second = second - hours * 3600

    var mimute = Math.floor(second / 60)
    second = second - mimute * 60

    return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
  } else {
    return '0:00:00'
  }
}

/**
 * 简化 axios接口请求 回调的方法
 * @interfaces 接口请求
 * @callback 回调函数
 * @that 当前 this
 * @isPrompt 是否弹出提示
 * @goBack 返回上一页
 * @isValidate 是否校验表单
 * @refsForm 该表单ref
 * */
const requestCallback = (interfaces, {params, pageFrom = ''}, callback, that, isPrompt = false, goBack = false, isValidate = false, refsForm = '') => {
  const interfacesCallback = () => {
    interfaces(params, `?pageNo=${pageFrom.pageNo}&pageSize=${pageFrom.pageSize}`).then((res) => {
      const { code, message, data } = res
      let params = { message: res['msg'] }
      if (typeof callback === 'function') {
        callback(data, code)
      }
      if (code == 200) {
        params['title'] = '成功'
        params['type'] = 'success'
        params['message'] = message
        if (isPrompt) {
          that.$notify(params)
        }
        if (goBack) {
          setTimeout(() => {
            that.$router.go(-1)
          }, 1500)
        }
      }
    })
  }

  if (isValidate) {
    that.$refs[refsForm].validate((valid) => {
      if (valid) {
        interfacesCallback()
      }
    })
  } else {
    interfacesCallback()
  }
}

/**
 * 处理空的参数
 * @param data
 * @returns
 */
const cleanParams = (data) => {
  var obj = {}
  for (var a in data) {
    if (data[a] != null && data[a] instanceof Array) {
      obj[a] = []
    } else {
      if (a == 'valid' || a == 'common') {
        obj[a] = true
      } else if (a == 'type') {
        obj[a] = 0
      } else {
        obj[a] = ''
      }
    }
  }
  return obj
}

Vue.prototype.getPowerMatch = getPowerMatch
Vue.prototype.getPageList = getPageList
Vue.prototype.downloadFile = downloadFile
Vue.prototype.requestCallback = requestCallback

/**
 * 开发环境不使用懒加载
 * 懒加载页面太多的话会造成webpack热更新太慢
 * 只有生产环境使用懒加载
 * @param {文件名} file
 */
// export const LazyLoading = (file) => process.env.NODE_ENV == 'development' ? require('@/views/' + file + '.vue').default : () => import('@/views/' + file + '.vue')
// window.LazyLoading = LazyLoading
// window.cleanParams = cleanParams
