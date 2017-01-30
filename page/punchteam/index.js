// punchteam

const toolbar = [
    {
      imageUrl: "../../image/home.png",
      name: "打卡规则",
      url:"createTeam/createTeam",
      gotoMethod: "navigate"
    }, 
    {
      imageUrl: "../../image/home.png",
      name: "创建小组",
      url:"createTeam/createTeam",
      gotoMethod: "navigate"
    },
    {
      imageUrl: "../../image/home.png",
      name: "我的小组",
      url:"createTeam/createTeam",
      gotoMethod: "navigate"
    }   
]

const listData = [
    {
      "activeid": "1",
      "activeName": "10天早起计划",
      "activeCost":"20",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "start",
      "activeStatusName": "报名中",
      "appleCount":"20",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    },
    {
      "activeid": "2",
      "activeName": "10天早起计划1",
      "activeCost":"10",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "end",
      "activeStatusName": "已结束",
      "appleCount":"10",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    },
    {
      "activeid": "2",
      "activeName": "10天早起计划1",
      "activeCost":"10",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "end",
      "activeStatusName": "已结束",
      "appleCount":"10",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    },
    {
      "activeid": "2",
      "activeName": "10天早起计划1",
      "activeCost":"10",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "end",
      "activeStatusName": "已结束",
      "appleCount":"10",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    },
    {
      "activeid": "2",
      "activeName": "10天早起计划1",
      "activeCost":"10",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "end",
      "activeStatusName": "已结束",
      "appleCount":"10",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    },
    {
      "activeid": "2",
      "activeName": "10天早起计划1",
      "activeCost":"10",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "end",
      "activeStatusName": "已结束",
      "appleCount":"10",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    },
    {
      "activeid": "2",
      "activeName": "10天早起计划1",
      "activeCost":"10",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "end",
      "activeStatusName": "已结束",
      "appleCount":"10",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    },
    {
      "activeid": "2",
      "activeName": "10天早起计划1",
      "activeCost":"10",
      "activeTime": "2017.01.01-2017.01.10",
      "activeStatus": "end",
      "activeStatusName": "已结束",
      "appleCount":"10",
      "activeImageUrl":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "pageNumber":1
    }
]

Page({
  data: {
    toolbar: toolbar,
    listData: listData
  },
  goto (){
    wx.navigateTo({
      url: './introduceTeam/introduceTeam'
    })
  }
})
