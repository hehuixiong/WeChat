// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14701/238/1670672741/110963/e18cd8fa/5a53923aNc10d3f98.jpg!q70.jpg',
      'https://img1.360buyimg.com/da/jfs/t15145/302/1751221936/86129/264d80c3/5a56bfffN0d225794.jpg',
      'https://img1.360buyimg.com/da/jfs/t16366/326/1299608572/403575/8054e023/5a4f2b09Nbdd3b2c3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000, //轮播图自动轮播时间
    duration: 300 //滑动之后的时间滚动
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
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

  }
})
