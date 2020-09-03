import {Req} from '../Req';

export function GetListApi(values){
    return Req.post('/assetblockchain2',{...values})
}
// 融资企业
export function GetManagementListApi(values) {
    return Req.post(`/bigdatadashboard/financingEnterprise`,{...values})
}
// 统计数据
export function GetStatisticsDataApi(values) {
    return Req.post(`/bigdatadashboard/getStatisticsData`,{...values})
}
// 获取系统日期
export function GetDateApi(values) {
    return Req.post(`/bigdatadashboard/getDateInfo`,{...values})
}

// 资产池
export function GetAssetPoolApi(values) {
    return Req.post(`/bigdatadashboard/assetPool`,{...values})
}
// 预警信息
export function GetWarningInfoApi(values) {
    return Req.post(`/bigdatadashboard/warningInfo`,{...values})
}
//资金池
export function GetFundPoolApi(values) {
    return Req.post(`/asset/cashflow`,{...values})
}
