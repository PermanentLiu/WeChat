//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
      inputValue: null,
  },

  bindKeyInput: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },

  buttonOnClick: function(){
    console.log(this.data.inputValue)
    app.getPhoneInfo(this.data.inputValue, function(data){
      console.log(data)
    });
  },
})
