// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetailData: {},
    isLoading: true,
    id: '',
    isTextStatus:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: `https://api.douban.com/v2/movie/subject/${this.data.id}`, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          movieDetailData:res.data,
          isLoading: false,
        })
        // 修改页面标题
        wx.setNavigationBarTitle({
          title: res.data.title
        })
        var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
        if (!patrn.exec(res.data.original_title)) {
          this.setData({
            isTextStatus:true
          })
        } else {
          this.setData({
            isTextStatus:false
          })
        } 
      }
    })
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