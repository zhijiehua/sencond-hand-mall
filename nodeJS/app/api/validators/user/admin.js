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
    checkPassWord (data) { //检验密码
        let numChar = new RegExp('^[0-9A-Za-z]+$');
        let numOther = new RegExp('^[0-9~!@#$%^&*]+$');
        let charOther = new RegExp('^[A-Za-z~!@#$%^&*]+$');
        if (data.passWord.length < 8) {
            return '密码不能少于八个字符'
        } else {
            if (data.passWord.match(numChar) != null || data.passWord.match(numOther) != null || data.passWord.match(charOther) != null) {
                return '密码必须包含字母数字以及特殊字符'
            }
        }
    }
}
class checkUserInfo {
    aa (data) {
       let check = new checkValidator()
       let msg = []
       if (check.checkUserName (data) != undefined) {
           msg.push(check.checkUserName (data))  
       }
       if (check.checkName (data) != undefined) {
           msg.push(check.checkName (data))
       }
       if (check.checkEmail (data) != undefined) {
           msg.push(check.checkEmail (data))
       }
       if (check.checkPhoneNumber (data) != undefined) {
           msg.push(check.checkPhoneNumber (data)) 
       }
       if (check.checkPassWord (data) != undefined) {
           msg.push(check.checkPassWord (data))
       }
       return msg
    }
    
}


module.exports = {
    checkUserInfo
}