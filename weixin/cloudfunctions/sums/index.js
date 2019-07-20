/**
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
*/
//第一个云函数，完成两个数的和
exports.main = async(event,context)=>{
  return{
    sum:event.i + event.j
  }

const wxContext = colud.getWXContext()
  return{
    event,
    openid:wxContext.OPENID,
    appid:wxContext.APPID,
    unionid:wxContext.UNIONID,
  }

}