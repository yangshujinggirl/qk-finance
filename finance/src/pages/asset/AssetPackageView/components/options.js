const statusOption=[
  {
    key:'0',
    value:'未封包'
  },{
    key:'1',
    value:'已封包'
  }
]
//资产状态
const assetStatus = {
  1:"未占用",
  2:"预占用",
  3:"已占用",
  4:"已请款"
}
//验真状态
const checkStatus = {
  1:"待验真",
  2:"验真通过",
  3:"存疑"
}

export { statusOption, assetStatus, checkStatus };
