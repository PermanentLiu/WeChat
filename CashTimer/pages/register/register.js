//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  continueButtonOnClick : function(){
    wx.switchTab({ url: '../me/me' })

    //新建用户信息
    console.log(app.appData.userInfo.nickName)
    wx.request({
      url: 'http://111.230.56.68:11111/user?name=' + app.appData.userInfo.nickName, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })

    wx.showToast({
      title: '登陆成功',
      duration: 1000,
    })
  },

  returnButtonOnClick : function(){
    wx.switchTab({ url: '../timer/timer' })
  },
  //事件处理函数
  onLoad: function () {
    if (app.appData.userInfo) {
      this.setData({
        userInfo: app.appData.userInfo,
        hasUserInfo: true
      })
    } 
    else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true ,
         
        })
      }
    } 
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.appData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
      
      
    }
   
  },
  getUserInfo: function (e) {
    console.log(e)
    app.appData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
