const swiperData = [
      {
        swiperId:"1",
        swiperName:"活动一",
        swiperImageUrl:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        gotoMethod:"navgator",
        gotoUrl:"/page/active/active?id=1"
      },
      {
        swiperId:"2",
        swiperName:"活动二",
        swiperImageUrl:"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        gotoMethod:"navgator",
        gotoUrl:"/page/active/active?id=1"
      },
      {
        swiperId:"3",
        swiperName:"活动三",
        swiperImageUrl:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
        gotoMethod:"navgator",
        gotoUrl:"/page/active/active?id=1"
      }    
    ]


const listData = [
    {
      "topicId": "1",
      "topicName": "10天早起计划",
      "topicType": "打卡小组",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814514
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    },
    {
      "topicId": "2",
      "topicName": "10天阅读好习惯",
      "topicType": "课程",
      "topicDescription": "如果你还无法简洁的表达你的想法，那只说明你还不够了解它如果你还无法简洁的表达你的想法，那只说明你还不够了解它",
      "topicImageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "topicTimeStamp": 1484892814516
    }
]


const toolbar = [
    {
      imageUrl: "../../image/home.png",
      name: "我的小组"
    }, 
    {
      imageUrl: "../../image/home.png",
      name: "我的课程"
    }   
]
Page({
  data: {
    swiperData: swiperData,
    swiperConfig:{
      indicatorDots: true,
      autoplay: true,
      circular: true,
      interval: 5000,
      duration: 1000,
      supportGoto: false
    },
    listData: listData,
    toolbar: toolbar
  },
  goto (e) {
    const data = e.target.dataset
    console.log(data)
  }
})