function getArr(maxVal,valName){
  let arr = []
  for (var i=1;i<maxVal;i++){
    arr.push({
      name: i + valName,
      value: (i-1).toString()
    })
  }
  return arr
}

module.exports = {
  getArr: getArr
}