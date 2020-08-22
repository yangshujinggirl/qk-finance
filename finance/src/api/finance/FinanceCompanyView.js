import Req from '../Req';

export function GetListApi(values){
    return Req.post('/assets/management/search',{...values})
}
export function GetTotalApi(values){
    return Req.post('/assets/financingEnterprises/accumulated',{...values})
}
//资产增长趋势
export function GetAssetRiseApi(values){
    return Req.post('/assets/assetGrowthTrend',{...values})
}
//资产规模
export function GetAssetScaleApi(values){
    return Req.post('/assets/assetSizeAndAuth',{...values})
}
