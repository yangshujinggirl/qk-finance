import {Req} from '../Req';

export function GetInfoApi(values){
    return Req.post('/assets/package/get/packageInfo',{...values})
}
// 资产列表
export function GetAssetListApi(values){
    return Req.post('/assets/package/search',{...values})
}
//异常列表
export function GetAssetBadListApi(values){
    return Req.post('/assets/package/abnormal/search',{...values})
}
//查询资产列表
export function GetChooseListApi(values){
    return Req.post('/assets/package/choose/assetsList',{...values})
}
//创建资产
export function GetAddAssetApi(values){
    return Req.post('/assets/package/add/assetsList',{...values})
}
//删除资产
export function GetDeleteAssetApi(values){
    return Req.post('/assets/package/delete/assetsList',{...values})
}
//过滤异常数据
export function GetFilterDataApi(values){
    return Req.post('/assets/package/filter/assetsList',{...values})
}
//资产集中度
export function GetConcentrApi(values){
    return Req.post('/assets/package/sourceRate',{...values})
}
//账期
export function GetRealDayApi(values){
    return Req.post('/assets/package/satatistics/realDay',{...values})
}
//资产分类
export function GetAssetTypeApi(values){
    return Req.post('/assets/package/realDate/statistics',{...values})
}
