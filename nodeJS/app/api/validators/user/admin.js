const validator = require('validator')
class checkValidator {
    checkUserName (data) {  //检验用户名
         if (!validator.isNumeric(data.userName)) {
            return '请输入纯数字字符串' 
         } else {
             if (data.userName.length < 6) {
                 return '用户名要求不低于6位字符'
             }
         }
    };
    checkName (data) {   //检验用户名
        if (data.name < 6 && data.data.length > 8) {
            return '请输入6~8位有效字符'
        }
    };
    checkEmail(data) {   //检验邮箱
        if (!validator.isEmail(data.email)) {
            return '请输入正确的邮箱格式'
        }
    };
    checkPhoneNumber (data) {  //检验电话号码
        if (!validator.isMobilePhone(data.phoneNumber)) {
            return '请输入正确的电话号码'
        }
    };
}
class checkUserInfo {
    aa (data) {
       let check = new checkValidator()
       let msg = []
       if (check.checkUserName (data) != undefined) {
           console.log(1111111111111)
           msg.push(check.checkUserName (data))  
       }
       if (check.checkName (data) != undefined) {
           console.log(22222222222)
           msg.push(check.checkName (data))
       }
       if (check.checkEmail (data) != undefined) {
           console.log(3333333)
           msg.push(check.checkEmail (data))
       }
       if (check.checkPhoneNumber (data) != undefined) {
           console.log(44444444)
           msg.push(check.checkPhoneNumber (data)) 
       }
       return msg
    }
    
}


module.exports = {
    checkUserInfo
}