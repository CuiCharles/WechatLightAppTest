// components/test/test.js

var e = require("../../utils/md5.js")
Component({

  options:{
    styleIsolation:"isolated"
  },
  /**
   * 组件的属性列表
   */
  properties: {

    //组件的对外属性，用来接收外界传递到组件中的数据
    max:{
      type: Number,
      value:10
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    count : 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    addCount(){

      if(this.data.count  >= this.properties.max) return
      this.setData({
        count : this.data.count + 1
      })

      // var r = e.MD5.hex_md5("b5f44254e8e34c10933d7d4263935224 app_keyzh_prod_mpparentAdLocationId2platformType3timeStamp1675913887856token3mp280788efada9e4cee92700f7677ad0e00 b5f44254e8e34c10933d7d4263935224")
      // console.log(r)
      console.log(this.count)

      this._showToast()
    },

    _showToast(){
      wx.showToast({
        title: 'count值：' + this.data.count,
      })
    },

    shnowInfo(){
      console.log(this.data)
      console.log(this.properties)
      console.log(this.data == this.properties)
    }

 

  }
})