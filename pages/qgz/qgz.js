



Page({
  data: {
    listGz: [],
    scrollTop: 100,
    hidden: false,
    page: 1,
  },
  onLoad:function(){
    this.fetchData(this.data.page);
  },
  lower:function(e){
    var self = this;
    self.setData({
      page: self.data.page + 1
    });
    console.log(self.data.page);
    this.fetchData(self.data.page);
  },
  fetchData:function (p,fn){
    var self = this;
    self.setData({
      hidden: false
    });
    wx.request({
      url:"http://m.7gz.com/Index/chieflist?isajax=1&sort=general.true&label=",
      data:{
        p:p
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {

        
        self.setData({
          listGz:self.data.listGz.concat(res.data.data.result_list)

        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);

      }
    });
  }

})