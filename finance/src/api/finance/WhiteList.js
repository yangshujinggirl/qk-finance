import {Req} from '../Req';
// 企业白名单
export function GetWhiteList(values) {
    return Req.post('/api/dealer/bankAccount/search', {...values})
}
//详情、
export function GetInfo(values) {
    return Req.post('/api/dealer/bankAccount/search', {...values})
}
//审批记录
export function GetApproveList(values) {
    return Req.post('/api/dealer/ApproveComments/search', {...values})
}
//审批记录
export function GetSaveApprove(values) {
    return Req.post('/api/dealer/bankAccount/review', {...values})
}
