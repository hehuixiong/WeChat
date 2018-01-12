// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieListData: [],
    movieType: 'in_theaters',
    start: 0,
    count: 10,
    pageIndex: 1,
    isLoading: true,
    isLoadingBottom:false,
    total:'',
    currentTab:0,
    bottomText:''
  },  

  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {
    this.data.pageIndex++;
    this.setData({
      start: (this.data.pageIndex - 1) * this.data.count,
      isLoadingBottom:true
    })
    console.log(this.data.start)
    if (this.data.start >= this.data.total){
      this.setData({
        isLoadingBottom: false,
        bottomText:'我是有底线的...'
      })
      return;
    }  
    this._getmovieData();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  switchover(e){
    let name = e.currentTarget.dataset.name
    let index = e.currentTarget.dataset.index
    this.setData({
      movieType:name,
      movieListData:[],
      isLoading:true,
      start:0,
      pageIndex:1,
      currentTab:index,
      bottomText:''
    })
    this._getmovieData();
  },
  onLoad: function (options) {
    this._getmovieData();
  },
  _getmovieData(){
    wx.request({
      url: `https://api.douban.com/v2/movie/${this.data.movieType}?start=${this.data.start}&count=${this.data.count}`, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json'
      },
      success: res => {
        let movieListData = [].concat(this.data.movieListData)
        if (movieListData.length > 0) {
          movieListData = movieListData.concat(res.data.subjects)
        } else {
          movieListData = res.data.subjects;
        }
        this.setData({
          movieListData,
          isLoading: false,
          isLoadingBottom:false,
          total:res.data.total
        })
        console.log(res.data)
      }
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})