import Req from '../Req';


// 角色管理
export function getRoleList(values) {
    return Req.post(`/role/search`, values)
}
// 新增角色
export function addRole(values) {
    return Req.post(`/role/addOrUpdate`, values)
}
// 删除角色
export function deleteRole(values) {
    return Req.post(`/role/deleteRole/${values}`)
}
// 授予权限1
export function getPermissionTree(id,date) {
    return Req.post(`/role/getPermissionTree/${id}/${date}`)
}
// 授予权限2
export function saveRolePermissionRef(values) {
    return Req.post(`/role/saveRolePermissionRef`, values)
}