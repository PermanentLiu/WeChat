Page({

  /**
   * 页面的初始数据
   */
  data: {
    text : "This is the content",
    buttonText : "This is a button",
    flag : true,
    data : ['aaa', 'bbb', 'ccc'],
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
    
  },

  buttonOnClick: function(){
    console.log("The button was clicked")

    var isShow = this.data.flag
    console.log("isShow :" + isShow)

    var array = this.data.data
    array.shift()

    if (isShow == true) {
      isShow = false
    } else {
      isShow = true
    }


    this.setData({
      buttonText: "This is a New Button",
      text: "This is a New Content, too",
      flag: isShow,
      data : array,
    })


  },
})