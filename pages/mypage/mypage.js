// pages/mypage/mypage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      count:2222
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },


  testDataPass(e){

    console.log(e.detail)
    this.setData({
      count:e.detail.data
    })
    const {email: d} = e.detail
    const {data:i} = e.detail
    console.log(d)
    console.log(i)
  },

  callChild(){
    const child =  this.selectComponent('.cA')
    console.log(child)
    child.addCount()

  },

  async getInfo(){
    const {data:res} = await wx.p.request({
      method:'GET',
      url:'https://www.baidu.com',
      data:{
        name:'zs',
        age:20
      }
    })

    console.log(res)
  }


})