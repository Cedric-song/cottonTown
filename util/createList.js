function getArr(maxVal,valName){
  let arr = []
  for (var i=1;i<maxVal;i++){
    arr.push({
      name: i + valName,
      value: i.toString()
    })
  }
  return arr
}

module.exports = {
  getArr: getArr
}