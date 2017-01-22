// createTeam.js
const input = require('../../template/input/input.js').inputConfig
const textarea = require('../../template/textarea/textarea.js').textareaConfig
const picker = require('../../template/picker/picker.js').pickerConfig

const teamName = Object.assign({}, input, {
  title: "小组名称",
  placeholder: "如 30天早起"
})
const teamIntro = Object.assign({}, textarea, {
  title: "小组介绍",
  placeholder: "请填写小组宣言一级规则介绍",
  nodeClass: "ta-height-max"
})
const teamCategory = Object.assign({}, picker, {
  rangeKey: "name",
  title: "小组类别",
  bindChangeFunction: "changeTeamCategory", 
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
const leaderIntro = Object.assign({}, textarea, {
  title: "组长介绍",
  placeholder: "例：某某公司创始人",
  nodeClass: "ta-height-min"
})

const startTime = Object.assign({}, picker, {
  mode: "date",
  date: "",
  title: "期望开始时间",
  subtitle:"（2017年年01月01日日0点截止报名并正式开始）",
  bindChangeFunction: "changeDate"
})

Page({
  data: {
    teamName: teamName,
    teamIntro: teamIntro,
    teamCategory: teamCategory,
    leaderIntro: leaderIntro,
    startTime: startTime

  },
  changeTeamCategory (e) {

    this.setData({
      "teamCategory.index": e.detail.value
    })
  },
  changeDate (e) {
    this.setData({
      "startTime.date": e.detail.value
    })
  }
})

