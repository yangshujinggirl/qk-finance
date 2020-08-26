import {Req} from '../Req';


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

// 授权树
export function getPermissionTree(id) {
    return Req.post(`/role/getPermissionTree/${id}`)
}

// 授予权限2
export function saveRolePermissionRef({allPermissionId, roleid}) {
    return Req.post(`/role/saveRolePermissionRef?allPermissionId=${allPermissionId}&roleid=${roleid}`)
}
