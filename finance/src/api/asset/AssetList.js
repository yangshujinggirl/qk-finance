import Req from '../Req';

export function GetListApi(values){
    return Req.post('/industry/search',{...values})
}
export function GetAddApi(values){
    return Req.post('/assets/createPackets',{...values})
}
