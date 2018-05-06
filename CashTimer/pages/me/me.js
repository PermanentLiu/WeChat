var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      avatarUrl:"",
      nickName:"",
    }
  },

  aboutus: function(){
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  },

  record:function(){
    wx.navigateTo({
      url: '../record/record',
    })
  },

  setting: function(){
    wx.navigateTo({
      url: '../setting/setting',
    })
  },

  exitting: function(){
    //https://server4.permanentliu.cn/user?name=刘永蘅Permanent%20Liu
    wx.showModal({
      title: '',
      content: '您真的要退出登陆吗',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://server4.permanentliu.cn/user?name=' + app.appData.userInfo.nickName,
          })
          app.appData.userInfo = null;
          app.appData.workTime = 25;
          wx.switchTab({ url: '../timer/timer' })
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },

  tutorial: function () {
    wx.navigateTo({ url: '../tutorial/tutorial' })
  },

  rule: function () {
    wx.navigateTo({ url: '../rule/rule' })
  },


  feedback: function () {
    wx.navigateTo({ url: '../feedback/feedback' })
  },

  addAddress: function(){
    wx.navigateTo({
      url: 'addAddress/addAddress',
    })
  },


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
    if (app.appData.userInfo == null) {
      wx.redirectTo({ url: '../register/register' })
    }

    var that = this;

    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = "userInfo.avatarUrl";
        var nickName = "userInfo.nickName";

        that.setData({

          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })

        wx.setNavigationBarTitle({
          title: res.userInfo.nickName,
        })
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