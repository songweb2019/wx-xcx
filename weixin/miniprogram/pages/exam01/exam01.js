// pages/exam01/exam01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello",
    num1: 10,
    age: 19,
    bool1: true,
    list: [{ id: 1, name: "东东" }, { id: 2, name: "花花" }]
  },

  handle1: function () {
    console.log("事件冒泡：子元素");
  },
  handle2: function () {
    console.log("事件冒泡：父元素");
  },
  handle3: function () {
    console.log("非冒泡：子元素2");
  },
  handle4: function () {
    console.log("非冒泡：父元素2");
  },

  jumpexam02: function () {
    //redirectTo 
    //
    //
    wx.redirectTo({
      url: '/pages/exam02/exam02?id=9',
    });
  },

  /**
   * 生命周期函数--监听页面加载  onLoad   组件创建成功触发一次
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成  onReady  组件初始化渲染成功触发一次
   */
  onReady: function () {
    console.log("1:监听页面初次渲染台组件");
  },

  /**
   * 生命周期函数--监听页面显示 onShow   显示组件 前台显示 多次
   */
  onShow: function () {
    console.log("2:监听页面显示/前台组件");
  },

  /**
   * 生命周期函数--监听页面隐藏  onHide   隐藏组件 后台 多次
   */
  onHide: function () {
    console.log("3:隐藏前台组件");
  },

  /**
   * 生命周期函数--监听页面卸载  onUnload 组件销毁
   */
  onUnload: function () {
    console.log("4：卸载组件");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("5：用户下拉操作，更新");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("6：用户上拉操作");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})