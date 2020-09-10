import {Req} from '../Req';

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
//资产账期
export function GetPayMentApi(values){
    return Req.post('/assets/package/avgRealDate/statistics',{...values})
}
//移除
export function GetDeleteApi(values){
    return Req.post(`/assets/package/delete?packetId=${values}`)
}
