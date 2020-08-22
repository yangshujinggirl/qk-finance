import Req from '../Req';


// 银行流水
export function bankStatementList(values) {
    return Req.post(`/moneyBack/bankStatement/search`, values)
}
// 流水明细
export function getBankStatement(values) {
    return Req.post(`/moneyBack/statement/search`, values)
}
// 回款计划
export function payPlanInfo(values) {
    return Req.post(`/moneyBack/payPlanInfo/search`, values)
}
