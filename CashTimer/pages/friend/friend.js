const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickName: "",
    },
    usersInfo:null,
    ranking:0,
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
    var thispage = this;

    var ranking = 'ranking';
    this.setData({
      [ranking]: 0,
    })

    wx.request({
      url: 'https://server2.permanentliu.cn/', //仅为示例，并非真实的接口地址
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)

        var usersInfo = "usersInfo";

        thispage.setData({
          [usersInfo]: res.data,
        })   
      }
    })

    //console.log("nickname: " + app.appData.userInfo.nickName)

    wx.request({
      url: 'https://server.permanentliu.cn/user?name=' + app.appData.userInfo.nickName,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("server: "+res.data[0])

        var ranking = 'ranking';

        thispage.setData({
          [ranking]: res.data[1],
        })

        console.log("ranking: "+ this.data.ranking)
      }
    })

  
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