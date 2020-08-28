import {Req} from '../Req';
// 请款管理
export function GetLoanManagementList(values) {
    return Req.post('loan/applyLoan/search', {...values})
}
// 请款详情
export function GetInfo(values) {
    return Req.post('/loanV2/applyLoan/applyInfo', {...values}, {reqHeader: 'form'})
}
// 审核记录
export function GetApproveList(values) {
    return Req.post('/loanV2/applyLoan/reviewInfo', {...values}, {reqHeader: 'form'})
}
// 审核
export function GetSaveApprove(values) {
    return Req.post('/loanV2/applyLoan/approved', {...values})
}
