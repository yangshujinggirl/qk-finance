import {Req} from '../Req';


//交易统计值
export function GetDealApi(values){
    return Req.get('/callback1/transactionsummary',{params:{...values}})
}
//统计值
export function GetTotalApi(values){
    return Req.get('/callback1/summaryinfo',{params:{...values}})
}
//列表
export function GetListApi(values){
    return Req.post('/callback1/transactionlist',{...values})
}
