import Req from '../Req';

//近期融资
export function GetLatestFinApi(values){
    return Req.post('/loanV2/recentFinancing',{...values})
}
//统计值
export function GetTotalApi(values){
    return Req.post('/assets/satatistics/assetTotalAndCount',{...values})
}
//债务占比
export function GetBebtApi(values){
    return Req.post('/assets/debtRatio',{...values})
}
//账期分布
export function GetPaymentApi(values){
    return Req.post('/loanV2/orderFinancingPeriod',{...values})
}
export function GetTageChartApi(values){
    return Req.post('/loanV2/percentageOfAssetSize',{...values})
}
