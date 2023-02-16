// components/slottest/slottest.js
Component({

  options:{
    multipleSlots: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type: Number,
      value:10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(){
      this.setData({
        count : this.properties.count + 1
      })

      this.triggerEvent('sync',{email:'cuiwenju@gmail.com',data:this.data.count})
    }
  }
})
