// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

//1.初始化云数据库
const db = cloud.database();
//2.删除多条记录
exports.main = async (event,context)=>{
  try{
    return await db.collection("webuser").where({
      name:"yingying"
    }).remove();
  }catch(e){
    console.log(e);
  }
}


/** 
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