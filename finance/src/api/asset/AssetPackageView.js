import Req from '../Req';

export function GetListApi(values){
    return Req.post('/assets/packet/search',{...values})
}
export function GetTotalApi(values){
    return Req.post('/assets/package/statistics',{...values})
}
export function GetAmountChangeChartApi(values){
    return Req.post('/assets/packet/getOpData',{...values})
}
export function GetPackegChangeApi(values){
    return Req.post('/assets/packet/findTop5List',{...values})
}
