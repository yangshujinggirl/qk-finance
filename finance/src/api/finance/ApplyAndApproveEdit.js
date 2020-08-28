import { Req, BlockReq } from '../Req';

// 融资详情
export function GetFinanceDetail(values) {
    return Req.post('/loanV2/apply/add/baseInfo', {...values},{reqHeader:'form'})
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
    return Req.post('/loanV2/getPackageByEnterprise', {...values},{reqHeader:'form'})
}
// 查询企业银行
export function GetBankList(values) {
    return BlockReq.post('/dealer/bankAccount/search', {...values})
}
// 查询还款预算信息
export function GetPayInfo(values) {
    return Req.post('/loanV2/apply/add/payInfo/', {...values}, {reqHeader:'form'})
}
// 查询还款预算--转让应账款列表
export function GetReceivablesListApi(values) {
    return Req.post('/assets/package/choose/assetsListForTransfer/', {...values})
}
// 查询还款预算--转让应账款确定
export function GetSaveReceivablesApi(values) {
    return Req.post('/assets/package/transfer/assetsList', {...values}, {reqHeader:'form'})
}
// 查询还款预算--转让应账款列表--删除
export function GetDeleteApi(values) {
    return Req.post('/assets/package/transfer/remove', {...values})
}
//查询还款预算--还款测算
export function GetCountPayApi(values){
    return Req.post('/loanV2/apply/genPlanInfo',{...values})
}
//查询还款预算--还款计划列表
export function GetPayPlanApi(values){
    return Req.post('/loanV2/apply/payplan/',{...values},{reqHeader:'form'})
}
//查询合同基础信息
export function GetContractInfoApi(values){
    return Req.post('/loanV2/apply/add/contract',{...values}, {reqHeader:'form'})
}
//查询合同列表
export function GetContractListApi(values){
    return Req.post('/loanV2/apply/contractFiles',{...values},{reqHeader:'form'})
}
//提交审批
export function GetSaveApproveApi(values){
    return Req.post('/loanV2/apply/approved',{...values})
}
//审批列表
export function GetApproveInfoApi(values){
    return Req.post('/loanV2/apply/add/approve',{...values},{reqHeader:'form'})
}
