// createTeam.js
const input = require('../../template/input/input.js').inputConfig
const textarea = require('../../template/textarea/textarea.js').textareaConfig
const picker = require('../../template/picker/picker.js').pickerConfig
const getArr = require('../../../util/createList.js').getArr
const formatTime = require('../../../util/util.js').formatTime
const convertTime = require('../../../util/util.js').convertTime

const TEAM_NAME = Object.assign({}, input, {
  title: "小组名称",
  placeholder: "如 30天早起"
})
const TEAM_INTRO = Object.assign({}, textarea, {
  title: "小组介绍",
  placeholder: "请填写小组宣言一级规则介绍",
  nodeClass: "ta-height-max"
})
const TEAM_CATEGORY = Object.assign({}, picker, {
  name:"teamCategory",
  rangeKey: "name",
  title: "小组类别",
  bindChangeFunction: "changeTeamCategory",
  default: "请选择",
  array: [
    {
      name: "个人发展",
      value: "1"
    },
    {
      name: "职场效率",
      value: "2"
    },
    {
      name: "习惯养成",
      value: "3"
    },
    {
      name: "实用技能",
      value: "4"
    },
    {
      name: "语言",
      value: "5"
    },
    {
      name: "健康与健身",
      value: "6"
    },
    {
      name: "文艺爱好",
      value: "7"
    },
    {
      name: "美丽修炼",
      value: "8"
    }
  ]
})
const LEADER_INTRO = Object.assign({}, textarea, {
  title: "组长介绍",
  placeholder: "例：某某公司创始人",
  nodeClass: "ta-height-min"
})

const START_TIME = Object.assign({}, picker, {
  mode: "date",
  value: "",
  title: "期望开始时间",
  subtitle: "（" + formatTime(new Date()).replace('/','年').replace('/','月').split(" ")[0].concat('日') + "0点截止报名并正式开始）",
  bindChangeFunction: "changeDate",
  default: formatTime(new Date()).replace('/','-').replace('/','-').split(" ")[0],
  value: formatTime(new Date()).replace('/','-').replace('/','-').split(" ")[0]
})


const FREQUENT_TIME = Object.assign({}, picker, {
  name: "frequentTime",
  rangeKey: "name",
  title: "每",
  bindChangeFunction: "changeFrequentTime",
  array:getArr(8,"天"),
  default: "1天",
  value: "1天"
})



const FREQUENT_TIMES = Object.assign({}, picker, {
  name: "frequentTimes",
  rangeKey: "name",
  title: "至少",
  bindChangeFunction: "changeFrequentTimes",
  array:getArr(6,"次"),
  default: "1次"
})

const DURATION = Object.assign({}, picker, {
  name: "duration",
  rangeKey: "name",
  title: "进行时间",
  subtitle:"（" + convertTime(START_TIME.value,"7").replace("/","年").replace("/","月").concat("日") + "0点小组结束）",
  bindChangeFunction: "changeDuration",
  array:getArr(31,"天"),
  default: "7天"
})

const ALERT_TIME = Object.assign({}, picker, {
  mode: "time",
  value: "",
  title: "提醒时间",
  subtitle: "（组员每天会在这个时间收到打卡提醒）",
  bindChangeFunction: "changeAlertTime",
  default:"09:00"
})

const WECHART_ID = Object.assign({}, input, {
  title: "微信号",
  subtitle:"（非微信昵称）",
  placeholder: "仅用于木棉小镇与您联系，不对外公开"
})

Page({
  data: {
    teamName: TEAM_NAME,
    teamIntro: TEAM_INTRO,
    teamCategory: TEAM_CATEGORY,
    leaderIntro: LEADER_INTRO,
    startTime: START_TIME,
    alertTime: ALERT_TIME,
    duration: DURATION,
    wechartId: WECHART_ID,
    frequentTime: FREQUENT_TIME,
    frequentTimes: FREQUENT_TIMES,
    selectorBlock:[
      {
        amount:"5",
        selected:"selected",
        writable:false
      },
      {
        amount:"10",
        selected:"",
        writable:false
      },
      {
        amount:"20",
        selected:"",
        writable:false
      },
      {
        amount:"30",
        selected:"",
        writable:false
      },
      {
        amount:"50",
        selected:"",
        writable:false
      },
      {
        amount:"_",
        selected:"",
        writable:true
      }
    ],
    selectorBlockConfig:{
      current_index:0,
    }

  },
  changeTeamCategory(e) {
    this.setData({
      "teamCategory.index": e.detail.value
    })
  },
  changeDuration(e) {
    this.setData({
      "duration.index": e.detail.value,
      "duration.value": this.data.duration.array[e.detail.value].name
    })

    this.setData({
       "duration.subtitle": "（" + convertTime(this.data.startTime.value,this.data.duration.value).replace("/","年").replace("/","月").concat("日") + "0点小组结束）"
    })
   

  },
  changeDate(e) {
    this.setData({
      "startTime.value": e.detail.value,
      "startTime.subtitle":  "（" + e.detail.value.replace('-','年').replace('-','月').concat('日') + "0点截止报名并正式开始）"
    })

    this.setData({
      "duration.subtitle": "（" + convertTime(this.data.startTime.value,this.data.duration.value).replace("/","年").replace("/","月").concat("日") + "0点小组结束）"
    })
  },
  changeAlertTime(e) {
    this.setData({
      "alertTime.value": e.detail.value
    })
  },
  changeFrequentTime(e) {
    this.setData({
      "frequentTime.index": e.detail.value
    })
  },
  changeFrequentTimes(e) {
    this.setData({
      "frequentTimes.index": e.detail.value
    })
  },
  changeAmount(e) {

    this.setData({
      ["selectorBlock[" + this.data.selectorBlockConfig.current_index + "].selected"]:""
    })

    this.setData({
      ["selectorBlock[" + e.target.dataset.index + "].selected"]:"selected"
    })

    this.setData({
      "selectorBlockConfig.current_index":e.target.dataset.index
    })
  }
})



