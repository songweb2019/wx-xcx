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
//第一个云函数：完成两个数的和
  //二个参数 i j
  //exports.main 导出
  //event 用户要传的参数
  //contnet 当前用户信息
  //async 异步，当前函数异步执行
exports.main = async (event,context)=>{
  return{
    sum:event.i + event.j
  }
}  
