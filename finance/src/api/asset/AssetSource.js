import { Req } from '../Req';

//交易统计值
export function GetInfoApi(values){
    return Req.post('/industry/tracking/history',{...values})
}
