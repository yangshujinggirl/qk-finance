import Req from '../Req';


//统计值
export function GetTotalApi(values){
    return Req.post('/assets/satatistics/financeLoan',{...values})
}
//列表
export function GetListApi(values){
    return Req.post('/loanV2/history/search',{...values})
}
