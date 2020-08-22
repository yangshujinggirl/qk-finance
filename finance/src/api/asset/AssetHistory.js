import Req from '../Req';


//统计值
export function GetTotalApi(values){
    return Req.post('/assets/satatistics/assetTotalAndCount',{...values})
}
//列表
export function GetListApi(values){
    return Req.post('/loan/history/search',{...values})
}
