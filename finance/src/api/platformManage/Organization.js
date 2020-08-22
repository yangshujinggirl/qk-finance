import Req from '../Req';


// 组织管理
export function getOrgList(values) {
    return Req.post(`/orgs/search`, values)
}
//新增组织
export function addOrg(values) {
    return Req.post(`/orgs/ajax/saveAndUpdate`, values)
}
//删除组织
export function deleteOrg(values) {
    return Req.post(`orgs/ajax/delete/${values}`)
}