function add() {
  // 实现该函数
  let len = arguments.length
  let result = 0
  for (let i = 0; i < len; i++) {
    result += parseInt(arguments[i]) 
  }
  return result + ''

}

module.exports =  add