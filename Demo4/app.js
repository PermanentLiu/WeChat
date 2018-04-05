//app.js
App({
  

  getPhoneInfo(phone, info){
    wx.request({
      url: 'http://apis.juhe.cn/mobile/get?phone='+parseInt(phone), 
      data: {
        // "phone":phone
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