import {Req, BlockReq} from '../Req';

// 融资详情
export function GetFinanceDetail(values) {
    return Req.post('/loanV2/apply/add/baseInfo', {...values}, {reqHeader: 'form'})
}

// 保存合同要素
export function GetSaveElement(values) {
    return Req.post('/loanV2/apply/save/baseInfo', {...values})
}

// 查询企业列表
export function GetCompanyList(values) {
    return Req.post('/loanV2/getEnterprisesByIndustry', {...values})
}

// 查询企业资产包
export function GetPackageList(values) {
    return Req.post('/loanV2/getPackageByEnterprise', {...values}, {reqHeader: 'form'})
}

// 查询企业银行
export function GetBankList(values) {
    return BlockReq.post('/dealer/bankAccount/search', {...values})
}

// 查询还款预算信息
export function GetPayInfo(values) {
    return Req.post('/loanV2/apply/add/payInfo/', {...values}, {reqHeader: 'form'})
}

// 查询还款预算--转让应账款列表
export function GetReceivablesListApi(values) {
    return Req.post('/assets/package/choose/assetsListForTransfer/', {...values})
}

// 查询还款预算--转让应账款列表--删除
export function GetDeleteApi(values) {
    return Req.post('/assets/package/transfer/remove', {...values})
}

//查询还款预算--还款测算
export function GetCountPayApi(values) {
    return Req.post('/loanV2/apply/payplan/', {...values})
}

//查询还款预算--还款计划列表
export function GetPayPlanApi(values) {
    return Req.post('/loanV2/apply/genPlanInfo', {...values})
}

//查询合同
export function GetContractApi(values) {
    return Req.post('/loanV2/apply/contractFiles', {...values})
}

// //资产增长趋势
// export function GetAssetRiseApi(values){
//     return Req.post('/assets/assetGrowthTrend',{...values})
// }
// //资产规模
// export function GetAssetScaleApi(values){
//     return Req.post('/assets/assetSizeAndAuth',{...values})
// }
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
