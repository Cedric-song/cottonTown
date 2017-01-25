function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 传入两个参数
/*
  @ startTime string 开始时间  eg:"2017-09-05"
  @ duration string 间隔 eg:"15"
*/
function convertTime (startTime,duration){
  const time = new Date(startTime).getTime() + Number.parseInt(duration) * 24 * 3600 * 1000
  return formatTime(new Date(time)).split(" ")[0] 
}
module.exports = {
  formatTime: formatTime,
  convertTime: convertTime
}
