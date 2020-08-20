import Req from '../Req';

export function GetListApi(values){
    return Req.post('/industry/search',{...values})
}
