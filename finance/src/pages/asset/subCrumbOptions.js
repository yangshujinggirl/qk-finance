export function subCrumbOptions(id){
  return [
    {
      url:`/account/asset/financeCompany/view/${id}`,
      key:'1',
      name:'概览'
    },{
      url:`/account/asset/financeCompany/list/${id}`,
      key:'2',
      name:'资产'
    },{
      url:`/account/asset/financeCompany/cash/${id}`,
      key:'3',
      name:'现金流'
    },{
      url:`/account/asset/financeCompany/history/${id}`,
      key:'4',
      name:'融资历史'
    },{
      url:`/account/asset/financeCompany/blockbChain/${id}`,
      key:'5',
      name:'区块链'
    },
  ]
}
