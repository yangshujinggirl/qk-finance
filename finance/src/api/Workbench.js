import Req from "./Req";

// 融资企业
export function getManagementList(values) {
    return Req.post(`/assets/management/searchList`, values)
}
//
export function financingEnterprises(values) {
    return Req.post(`/assets/financingEnterprises/accumulated`, values)
}
//
export function getLast7DayAvgAssetAndDate(values) {
    return Req.get(`/dashboard/getLast7DayAvgAssetAndDate`, values)
}
//
export function getLast3MoutnAssetCountAndName(values) {
    return Req.get(`/dashboard/getLast3MoutnAssetCountAndName`, values)
}