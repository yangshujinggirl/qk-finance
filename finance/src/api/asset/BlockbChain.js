import {BlockReq} from '../Req';


//交易统计值
export function GetDealApi(values){
    return BlockReq.get('/callback1/transactionsummary',{params:{...values}})
}
//统计值
export function GetTotalApi(values){
    return BlockReq.get('/callback1/summaryinfo',{params:{...values}})
}
//列表
export function GetListApi(values){
    return BlockReq.post('/callback1/transactionlist',{...values})
}
