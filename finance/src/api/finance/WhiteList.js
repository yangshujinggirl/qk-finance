import {Req,BlockReq} from '../Req';
// 企业白名单
export function GetWhiteList(values) {
    return BlockReq.post('/dealer/bankAccount/search', {...values})
}
//详情、
export function GetInfo(values) {
    return BlockReq.post('/dealer/bankAccount/search', {...values})
}
//审批记录
export function GetApproveList(values) {
    return BlockReq.post('/dealer/ApproveComments/search', {...values})
}
//审批
export function GetSaveApprove(values) {
    return BlockReq.post('/dealer/bankAccount/review', {...values})
}
