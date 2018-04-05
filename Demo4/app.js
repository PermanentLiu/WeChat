//app.js
App({
  

  getPhoneInfo(phone, info){
    wx.request({
      url: 'http://apis.juhe.cn/mobile/get?key=e4d4151244869fb453b467f4c9c46ecf', 
      data: {
        // "phone":phone
        "phone": parseInt(phone)
      },

      success: function (res) {
        // console.log(res.data)
        info(res.data)
      }
    })
  },


  globalData: {
    userInfo: null
  }
})