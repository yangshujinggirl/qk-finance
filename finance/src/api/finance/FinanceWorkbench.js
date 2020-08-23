import Req from '../Req';

export function GetListApi(values){
    return Req.post('/assetblockchain2',{...values})
}
// 融资企业
export function GetManagementListApi() {
    return Req.post(`/bigdatadashboard/financingEnterprise`)
}
// 统计数据
export function GetStatisticsDataApi() {
    return Req.post(`/bigdatadashboard/getStatisticsData`)
}
// 获取系统日期
export function GetDateApi() {
    return Req.post(`/bigdatadashboard/getDateInfo`)
}
// 现金流
export function GetCashflowApi() {
    return Req.post(`/asset/cashflow`)
}
// 资产池
export function GetAssetPoolApi() {
    return Req.post(`/bigdatadashboard/assetPool`)
}
// 预警信息
export function GetWarningInfoApi() {
    return Req.post(`/bigdatadashboard/warningInfo`)
}