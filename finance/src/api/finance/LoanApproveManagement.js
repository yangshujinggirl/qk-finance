import {Req, BlockReq} from '../Req';

//放款申请/审核
export function ApplyAndApproveEdit(values) {
    return Req.post('/loanV2/management/financingLoan/edit', values)
}

//基本信息
export function GetApproveDetailApi(values) {
    return Req.post(`/loan/management/view/approveStep/${values}`)
}

//银行列表
export function GetBankListApi() {
    return Req.post(`/common/getBankList`)
}

//审批记录
export function GetApproveListApi(values) {
    return Req.post(`/loanV2/apply/add/approve`, values, {reqHeader: 'form'})
}
