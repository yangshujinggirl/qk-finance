import Req from '../Req';


//统计值
export function GetTotalApi(values){
    return Req.post('/asset/cashflow/getStatisticsData',{...values})
}
