Page({
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '个人设置'
    })
    this.setData({
      workTime: wx.getStorageSync('workTime'),
    })
  },
  changeWorkTime: function (e) {
    wx.setStorage({
      key: 'workTime',
      data: e.detail.value
    })
  },
  
})
