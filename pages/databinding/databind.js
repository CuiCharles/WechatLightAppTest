// pages/databinding/databind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:"hello light app",
    imageSrc:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90d06a63046643fab77181d2d053199d~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp",
    count:0,
    msg:"hello",
    condition:true,
    arry1:['apple','huawei','xiaomi'],
    userlist:[
      {id:1,name:'小红'},
      {id:1,name:'小黄'},
      {id:1,name:'小花'}
    ]
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

  //定义按钮的时间
  btnTapHandler(e){
    console.log(e)
  },

  btnCountAdd(e){

    wx:wx.request({
      url: 'https://www.baidu.com',
      data: {
        age:23,
        name:"charles"
      },
      method: "GET",
     
      timeout: 1000000,
      success: (result) => {

        console.log(result)

      },
      fail: (err) => {
        console.log('error:' + JSON.stringify(err))
      },
    })

    console.log("ok")
    // this.setData({
    //   count: this.data.count + 1,
    //   condition : !this.data.condition
    // })


  },

  inputHanlder(e){
    //console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
    
    this.onLoad
  },


  eventList(e){
    console.log(JSON.stringify(e))
    console.log(e)
    this.setData({
      count : this.data.count + e.target.dataset.info
    })
  }



})