import {BlockReq, ChainReq} from '../Req';


//交易统计值
export function GetDealApi(values){
    return ChainReq.get('/callback1/transactionsummary',{params:{...values}})
}
//统计值
export function GetTotalApi(values){
    return ChainReq.get('/callback1/summaryinfo',{params:{...values}})
}
//列表
export function GetListApi(values){
    return ChainReq.post('/callback1/transactionlist',{...values})
}
