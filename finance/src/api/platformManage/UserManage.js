import Req from '../Req';


// 用户管理
export function getUserList(values) {
    return Req.post(`/users/search`, values)
}
// 机构列表
export function getTreeOrg(values) {
    return Req.post(`/orgs/ajax/getTreeOrg`, values)
}
// 新增用户
export function addUser(values) {
    return Req.post(`/users/save`, values)
}
// 停用
export function validUser(id,isValid) {
    return Req.post(`/users/updateUser/${id}/${isValid}`)
}
// 关联用户列表
export function getRelateUserList() {
    return Req.get(`/users/roles/search`)
}
// 关联用户
export function relateUser(values) {
    return Req.post(`/users/roles/saveUserRoles`,values)
}
