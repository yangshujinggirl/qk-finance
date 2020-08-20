import Req from '../Req';


// 银行流水
export function bankStatement(values) {
    return Req.post(`/moneyBack/bankStatement/search`, values)
}
// 回款计划
export function getRoleList(values) {
    return Req.post(`/moneyBack/payPlanInfo/search`, values)
}
