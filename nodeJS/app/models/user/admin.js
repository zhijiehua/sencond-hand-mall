const bcrypt = require('bcryptjs')
const {sequelize} = require('../../../core/db')
const {Sequelize, Model} = require('sequelize')

// 定义管理员模型
class Admin extends Model {

}

// 初始用户模型
Admin.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
      user_name: {
        type: Sequelize.STRING(15),
        allowNull: false,
        comment: '用户名'
      },
      name: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
        comment: '用户昵称'
      },
      email: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false,
        comment: '邮箱'
      },
      phone_number: {
        type: Sequelize.STRING(11),
        unique: true,
        allowNull: false,
        comment: '邮箱'
      },
      pass_word: {
        type: Sequelize.STRING(15),
        // set(val) {
        //   // 加密
        //   const salt = bcrypt.genSaltSync(10);
        //   // 生成加密密码
        //   const psw = bcrypt.hashSync(val, salt);
        //   this.setDataValue("password", psw);
        // },
        unique: true,
        allowNull: false,
        comment: '管理员密码'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        get() {
          return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
        }
  }
}, {
  sequelize,
  modelName: 'userinfo',
  tableName: 'userinfo'
})


module.exports = {
  Admin
}
