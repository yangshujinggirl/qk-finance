import Req from '../Req';


// 组织管理
export function getOrgList(values) {
    return Req.post(`/orgs/search`, values)
}
// 角色管理
export function getRoleList(values) {
    return Req.post(`/role/search`, values)
}
// 用户管理
export function getUserList(values) {
    return Req.post(`/users/search`, values)
}
