import {Req} from '../Req';


// 用户管理
export function getUserList(values) {
    let {
        pageNow,
        pageSize
    } = values
    return Req.post(`/users/search?userName=${values.userName||''}`, {pageNow, pageSize})
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
export function validUser(id, isValid) {
    return Req.post(`/users/updateUser/${id}/${isValid}`)
}

// 关联用户列表
export function getRelateUserList(values) {
    return Req.post(`/users/roles/search`, values)
}

// 已关联用户列表
export function getRelatedUser(id) {
    return Req.get(`/users/roles/${id}`)
}

// 关联用户
export function relateUser(values) {
    return Req.post(`/users/roles/saveUserRoles`, values)
}
