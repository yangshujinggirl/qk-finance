//融资状态
const financeStatusMap = {
  1:"未占用",//待融资
  2:"预占用",//待融资
  3:"已占用",//已打包,已融资
  4:"已请款"//融资完结
}
const assetStatusMap={
  1:'未验证',
  2:'已验证',
  3:'无效',
  4:'已K座',
  5:'部分付款',
}
const shipperTypeMap={
  1:'仓库直发',
  0:'厂方直发',
}

export {
  financeStatusMap,assetStatusMap,shipperTypeMap
}
