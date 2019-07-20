// 初始化数据库
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  //添加
  insert:function(){
    db.collection("kw_books").add({
      data:{
        id:10,
        title:"破门而入，王晶哭着跑回家里",
        author:"bzymxly",
        cont: "破门而入，王晶哭着跑回家里，趴在床上，大哭。他被骗了，一个男人，罗文，骗走了她的心。那是一个午后，她上大二，是一名有名的学霸，而罗文是一位只会打篮球的混小子。",
        label:"伤感"
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },

  //更新
  update:function(){
    db.collection("kw_books").doc("_id号").update({
      data:{
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  //查询
  select:function(){

  },
  //删除
  del:function(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})