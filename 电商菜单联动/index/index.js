//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arrs: [
      {
        title: '肉类',
        id: 'rouclass',
        content: [
          {
            name: '回锅肉'
          },
          {
            name: '狗肉'
          },
          {
            name: '羊肉'
          },
          {
            name: '猪肉'
          },
          {
            name: '牛肉'
          },
          {
            name: '驴肉'
          },
          {
            name: '猫肉'
          }
        ]
      },
      {
        title: '菜类',
        id: 'caiclass1',
        content: [
          {
            name: '芹菜'
          },
          {
            name: '菠菜'
          },
          {
            name: '白菜'
          },
          {
            name: '黄瓜菜'
          },
          {
            name: '土豆'
          },
          {
            name: '玉米'
          },
          {
            name: '大米'
          },
          {
            name: '高梁'
          }
        ]
      },
      {
        title: '菜类',
        id: 'caiclass2',
        content: [
      
          {
            name: '玉米'
          },
          {
            name: '大米'
          },
          {
            name: '高梁'
          }
        ]
      },
      {
        title: '菜类',
        id: 'caiclass3',
        content: [
         
          {
            name: '土豆'
          },
          {
            name: '玉米'
          },
          {
            name: '大米'
          },
          {
            name: '高梁'
          }
        ]
      },
      {
        title: '菜类',
        id: 'caiclass4',
        content: [
         
          {
            name: '黄瓜菜'
          },
          {
            name: '土豆'
          },
          {
            name: '玉米'
          },
          {
            name: '大米'
          },
          {
            name: '高梁'
          }
        ]
      },
      {
        title: '菜类',
        id: 'caiclass5',
        content: [
         
          {
            name: '白菜'
          },
          {
            name: '黄瓜菜'
          },
          {
            name: '土豆'
          },
          {
            name: '玉米'
          },
          {
            name: '大米'
          },
          {
            name: '高梁'
          }
        ]
      },
      {
        title: '菜类',
        id: 'caiclass6',
        content: [
         
          {
            name: '菠菜'
          },
          {
            name: '白菜'
          },
          {
            name: '黄瓜菜'
          },
          {
            name: '土豆'
          },
          {
            name: '玉米'
          },
          {
            name: '大米'
          },
          {
            name: '高梁'
          }
        ]
      }
    ],
    rightId: "",
    leftId: "",
    height: '',
    heightArr: '',
    activeIndex: 0
  },
  scrollposition: function(e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({
      rightId: this.data.arrs[e.currentTarget.dataset.index].id,
      activeIndex: e.currentTarget.dataset.index
    })
    console.log(this.data.rightId)
  },
  test: function(e) {
    clearTimeout(timer);
    let timer = setTimeout(() => {
      let srollTop = e.detail.scrollTop;
      console.log(srollTop)
      for (let i = 0; i < this.data.heigthArr.length; i++) {
        if (
          srollTop >= this.data.heigthArr[i] &&
          srollTop < this.data.heigthArr[i + 1] &&
          this.data.activeIndex != i
        ) {
          this.setData({
            activeIndex: i
          });
        }
      }
    }, 100)
  },
  onReady:function(){
    const res = wx.getSystemInfoSync();
    const winHeight = res.windowHeight;
    console.log(winHeight)
    this.setData({
      height: winHeight
    })
    this.calculateHeight()
  },
  calculateHeight: function() {
    let heightArr = []; 
    let height = 0;
    heightArr.push(height);
    var query = wx.createSelectorQuery();
    query.selectAll(".itemContent").boundingClientRect();
    query.exec(res => {
      for (let i = 0; i < res[0].length; i++) {
        console.log(res[0][i])
        height += parseInt(res[0][i].height);
        heightArr.push(height);
      }
      this.setData({
        heigthArr: heightArr
      });
      console.log(heightArr)
    });
  }
})
