import Req from "./Req";

// 融资企业
export function getManagementList(values) {
    return Req.post(`/management/searchList`, values)
}