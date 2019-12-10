var $ruleValidator = (message = '请输入必填字段', type, required = true, trigger = ['blur', 'change']) => {
  let rules = [{ required: required, message: message, trigger: trigger }]
  switch (type) {
    // 校验密码
    case 'password':
      // rules.push({pattern: /^[A-Z][^\u4e00-\u9fa5\s]{5,15}$/, message: '请输入字母+数字的形式，且首字母大写，长度在6-16位之间的密码', min: 6, max: 15, trigger: ['blur','change']});
      break

      // 校验手机号码
    case 'phone':
      rules.push({pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入正确的手机号码', trigger: ['blur', 'change']})
      break

      // 校验邮箱
    case 'email':
      // eslint-disable-next-line standard/object-curly-even-spacing
      rules.push({pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, message: '请输入正确的邮箱', trigger: ['blur', 'change'] })
      break

      // 校验身份证号码
    case 'card':
      // eslint-disable-next-line standard/object-curly-even-spacing
      rules.push({pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入15或者18位身份证号码', trigger: 'blur' })
      break

    case 'money':
      // eslint-disable-next-line standard/object-curly-even-spacing
      rules.push({pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/, message: '请输入正确的金额', trigger: 'blur' })
      break
  }
  return rules
}

window.$ruleValidator = $ruleValidator
