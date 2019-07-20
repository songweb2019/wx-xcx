// 初始化数据库
const db = wx.cloud.database();
Page({
  //页面的初始数据
  data: {
    list:[]
  },
  //添加数据 webuser
  insert:function(){ 
    /** 回调函数写法
    db.collection("webuser").add({
      data:{
        name:"dongdong",
        age:13
      },
      success:(res)=>{
        console.log(res);
      },
      fail:(err)=>{
        console.log(err);
      }
    });
    */
    //常用写法
    db.collection("webuser").add({
      data:{
        name:"yingying",
        age:21
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  
  //更新数据
  update:function(){
    db.collection("webuser")
    .doc("94b1e1fc5d021347009437a402e73c77")
    .update({
        data:{
          age:22
        }
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
   },

  //删除数据
  del:function(){
     db.collection("webuser")
     .doc("94b1e1fc5d021347009437a402e73c77")
     .remove()
     .then(res=>{
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })
   },

  //查询数据
  select(){ 
    db.collection("webuser")
    .get()
    .then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },

  //查询where 数据
  selectwhere:function(){
   db.collection("webuser").where({
     name:"dongdong"
   }).get().then(res=>{
     console.log(res);
   }).catch(err=>{
     console.log(err);
   })
  },

  /** 练习：
  //添加数据 webstu
  insertStu: function(){
    db.collection("webstu").add({
      data: {
        name: "tom",
        age: 12,
        clazz: "web"
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  },
  //更新数据
  updateStu:function(){
  db.collection("webstu")
  .doc("281fb4bf5d021c6b00970b45760295dc")
  .update({
    data:{
      age: 22
    }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })    
  },
  */

  //查询webuser所有记录并显示在组件中
    //步骤：
    //1.在data创建空数组
    //2.查询webuser中所有记录赋值数据
    //3.在网页中循环显示记录
    //2.查询
    search(){ 
      db.collection("webuser")
      .get()
      .then(res=>{
        //console.log(res.data); //error
        //this.list = res.data; //error
        this.setData({
          list:res.data
        });

      }).catch(err=>{
        console.log(err);
      })
    },

    //查询集合记录并获取参数显示在组件上
    //e 当前事件属性
    delItem:function(e){
      var _id=e.target.dataset.id;
      db.collection("webuser")
      .doc(_id).remove()
      .then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },

    //云函数调用
    handleSuma:function(){
       wx.cloud.callFunction({
         name:"suma",
         data:{
           i:10,
           j:19
         }
       }).then(res=>{
        console.log(res);
       }).catch(err=>{
        console.log(err);
       })
    },

   //获取登录用户的id
   handkeLogin:function(){
     wx.cloud.callFunction({
       name:"login"
     }).then(res=>{
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })
   }, 

  //删除多条记录
  handleDel:function(){
    wx.cloud.callFunction({
      name:"batchDeletes"
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },

  //上传文件
  //开发流程
  upload:function(){
    //1.选择图片
    wx.chooseImage({
      count:1,  //一次选择几张图片，最大为九张
      sizeType:["original","compressed"], //选择图片原图/压缩
      sourceType:["album","camera"],  //图片来源
      success: function(res) {  //成功选择
        var list = res.tempFilePaths[0];//选中图片 数组
         //console.log(list); 
         //2.上传图片
        wx.cloud.uploadFile({
           cloudPath:new Date().getTime()+".jpg",  //时间戳+后缀 云上新文件路径
           filePath:list,   //准备上传文件路径
           success:res=>{
             console.log(res.fileID);
           }
         })
      },
    })
  },

  //展示图片
  getImage:function(){
    
  },

  /**
   * 云存储练习
   */
    //上传
    myupload:function(){
      //1. 选择图片
      wx.chooseImage({
        count:1,
        sizeType:["original","compressed"],
        sourceType:["album","camera"],
        success: function(res){
          //选中图片列表
          var file = res.tempFilePaths[0];
          //1.1 选择成功后上传图片
          wx.cloud.uploadFile({
            cloudPath:new Date().getTime()+".jpg",
            filePath:file,
            success:res=>{
              //1.2 将图片fileID保存集合中
              var fileID = res.fileID;
              db.collection("myphoto").add({
                data:{
                  fileID:fileID
                }    
              }).then(res=>{
                console.log(res);
              }).catch(err=>{
                console.log(err);
              })
            }
          })
        },
      })
    },

    //展示图片
    myImage:function(){
       //1.查询云数据库集合 myphoto
       db.collection("myphoto")  //指定集合
       .get()                    //获取查询
       .then(res=>{              //获取成功 回调
         //console.log(res.data); 
         var list = res.data;  //数据库fileID集合
         this.setData({
           rows:list     //保存rows数组
         });
         //2. 获取数组保存
         //3. 在网页显示图片
       })
       .catch(err=>{             //获取失败
         console.log(err);
       })                 
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    
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