import {Req} from '../Req';

export function GetListApi(values){
    return Req.post('/industry/search',{...values})
}
export function GetTotalApi(values){
    return Req.post('/assets/financingEnterprises/accumulated',{...values})
}
export function GetAddApi(values){
    return Req.post('/assets/createPackets',{...values})
}
