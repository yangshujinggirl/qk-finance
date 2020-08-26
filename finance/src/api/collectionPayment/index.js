import {Req} from '../Req';


// 银行流水
export function bankStatementList(values) {
    return Req.post(`/moneyBack/bankStatement/search`, values)
}
// 流水明细
export function getBankStatement(values) {
    return Req.post(`/moneyBack/statement/search`, values)
}
// 核销详情
export function getBankStatementDetail(transactionSerialNumber) {
    return Req.post(`moneyBack/statement/writeOff/${transactionSerialNumber}`)
}
// 核销详情
export function getBankStatementDetaillist(values) {
    return Req.post(`/moneyBack/statement/writeOff/search`, values)
}
// 回款计划
export function getPayPlanList(values) {
    return Req.post(`/moneyBack/payPlanInfo/search`, values)
}
// 回款计划详情
export function getPayPlan(planId) {
    return Req.post(`/moneyBack/payPlanInfo/detail/${planId}`)
}
// 回款计划详情列表
export function getPayPlanDetailList(planId) {
    return Req.post(`/moneyBack/payPlanInfo/backList/${planId}`)
}
